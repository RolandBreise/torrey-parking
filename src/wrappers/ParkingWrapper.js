import {Parking}from "../ui-components";
import React from 'react';
import { myGetStudent } from "../graphql/myQueries";
import { API } from 'aws-amplify';
import { createReleases, deleteReleases } from '../graphql/mutations'
import { today, canRelease, findPoints } from "./util";


export default class ParkingWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
            Released: false,
            student: this.props.student,
            date: today(),
        });
        //TODO: set Released based on user data
  }

  
  releasedToday(){
    return (this.state.student.Releases.items.find(release => release.date == this.state.date));
  }

  async updateStudent(){
    try {
        await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
            query: myGetStudent, variables: {  id: this.state.student.id  }
        }).then(student => {
            this.setState({
                student: student.data.getStudent,
            })
        })
    } catch(err){
        console.log({ err });
    }
  }

  async createRelease(date){
    try {
        await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
            query: createReleases, variables: { input: { 
                date: date, 
                studentID: this.state.student.id, 
                // lot: this.state.student.ParkingSpot.lot, 
                // number: this.state.student.ParkingSpot.number
            } }
        }).then(release => { // created a new release.  Record is in release.data.createRelease
            this.updateStudent() // Ask App to reload this student, which will cause this component to re-render
        })
    } catch (err) {
        console.log({ err });
    }
  }

  async deleteRelease(release){
    try {
        await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
            query: deleteReleases, variables: { input: { id: release.id, _version: release._version } }
        }).then(release => { // deleted
            this.updateStudent();
        })
    } catch (err) {
        console.log({ err });
    }
  }

  

  parkingOverrides = {
    
    "GiveUpParking": { 
        onClick: () => {
            let release = this.releasedToday();
            if(release){
                this.deleteRelease(release);
            }else{
                this.createRelease(this.state.date);
            }      

        },

        
    },
    "LogoutButton": { 
        onClick: () => {
             this.props.logout()

        }
    },
    "Date": { 
        onChange: (event) => {
            this.setState({
                date: event.target.value,
            })
        }
    },
}

  render (){
    let overrides = this.parkingOverrides;
    overrides["GiveUpParking"].isDisabled = this.state && canRelease(this.state.date) ? false : true;
    
      return (
        <Parking 
            overrides={this.parkingOverrides}
            ButtonLabel={this.releasedToday() ? "Reclaim Parking" : "Release Parking"}
            GiveUpParking={this.state.GiveUpParking}
            PointsTracker={"points: " + findPoints(this.state.student.Releases.items)}
            date={this.state.date}
        />
      )
    }
}
