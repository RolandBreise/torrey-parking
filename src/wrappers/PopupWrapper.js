import {LoginScreen, SelectionPopup}from "../ui-components";
import React from 'react';
import { API } from 'aws-amplify';
import { findPoints, today } from "./util";
import { myGetStudent } from '../graphql/myQueries';
import { createReleases, deleteReleases, updateStudent, createStudent, deleteStudent } from '../graphql/mutations'


export default class PopupWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
        student: this.props.student,

        date: today(),
        errorMsg: null,
    });
  }



  releasedToday(){
    return (this.state.student.Releases.items.find(release => release.date == this.state.date));
  }

  updateStudentState(field, value) {
    let student = this.state.student;
    student[field] = value;
    this.setState({ student: student })
}

  async updateStudentData() {
    const student = this.props.student;
    if (this.state.student) {
        try {
            await API.graphql({
                query: updateStudent, variables: {
                    input: {
                        id: this.state.student.id, // ID and...
                        _version: this.state.student._version, // ...version required for update (and delete)
                        firstName: this.state.student.firstName,
                        lastName: this.state.student.lastName,
                        studentEmail: this.state.student.studentEmail,
                        studentID: this.state.student.studentID,
                    }
                }
            }).then(student => { // created the new Student so now update assigned spot's record to point at student

                this.props.close();
            })
        } catch (err) {
            console.log({ err });
        }
    }
}
async deleteStudentData() {
    const student = this.props.student;
    if (this.state.student) {
        try {
            await API.graphql({
                query: deleteStudent, variables: {
                    input: {
                        id: this.state.student.id, // ID and...
                        _version: this.state.student._version, // ...version required for update (and delete)
                    }
                }
            }).then(student => { // deleted the  Student so now update their old spot if they had one

                this.props.close();
            })
        } catch (err) {
            console.log({ err });
        }
    }
    this.props.close();
}

async createStudentData() {
    const student = this.props.student;
    if (this.state.student) {
        try {
            await API.graphql({
                query: createStudent, variables: {
                    input: {
                        firstName: this.state.student.firstName,
                        lastName: this.state.student.lastName,
                        studentEmail: this.state.student.studentEmail,
                        studentID: this.state.student.studentID,
                    }
                }
            }).then(student => { // created the new Student so now update assigned spot's record to point at student
                this.props.close();
            })
        } catch (err) {
            console.log({ err });
        }
    }
}

onClickSave(){
    if(this.state.student.firstName == null || this.state.student.firstName == ""){
        this.setState({
            errorMsg: "first name invalid..."
        });
    }else if(this.state.student.lastName == null || this.state.student.lastName == ""){
        this.setState({
            errorMsg: "last name invalid..."
        });
    }else if(this.state.student.studentEmail == null || this.state.student.studentEmail == ""){
        this.setState({
            errorMsg: "student email invalid..."
        });
    }else if(this.state.student.studentID == null || this.state.student.studentID == ""){
        this.setState({
            errorMsg: "student id invalid..."
        });
    }else if(this.state.student.id){
        this.updateStudentData();
    }else{
        this.createStudentData();
    }
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

  popupOverrides = {
    
    "FirstName": { 
        onChange: (event) => {
            this.updateStudentState('firstName', event.target.value)

          this.setState({
            errorMsg: "",
          });
        }
    },
    "LastName": { 
        onChange: (event) => {
          this.updateStudentState('lastName', event.target.value)
          this.setState({
            errorMsg: "",
          });
        }
    },
    "StudentEmail": { 
        onChange: (event) => {
            this.updateStudentState('studentEmail', event.target.value)
          this.setState({
            errorMsg: "",
          });
        }
    },
    "StudentID": { 
        onChange: (event) => {
            this.updateStudentState('studentID', event.target.value)
          this.setState({
            errorMsg: "",
          });
        }
    },
    "Button": { 
      onClick: () => {
        let release = this.releasedToday();
        if(release){
            this.deleteRelease(release);
        }else{
            this.createRelease(this.state.date);
        }   
      }
    },
    "CancelButton": { 
        onClick: () => {
            this.props.close();
        }
    },
    "SaveButton": { 
        onClick: () => {
            this.onClickSave();
        }
    },
    "DeleteButton": { 
        onClick: () => {
            if (window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS STUDENT?") == true) {
            this.deleteStudentData();
            }
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
    let overrides = this.popupOverrides;
    overrides["DeleteButton"].isDisabled = this.state.student.id ? false : true;
    overrides["Button"].isDisabled = this.state.student.id ? false : true;


      return (
        <SelectionPopup 
            overrides={overrides}
            firstName = {this.state.student.firstName}
            lastName = {this.state.student.lastName}
            studentEmail = {this.state.student.studentEmail} 
            studentID = {this.state.student.studentID}
            date = {this.state.date}
            ErrorMsg = {this.state.errorMsg}
            ButtonLabel={this.releasedToday() ? "Reclaim Parking" : "Release Parking"}
            PointCounter={"points: " + findPoints(this.state.student.Releases.items)}

        />
      )
    }
    

  
}
