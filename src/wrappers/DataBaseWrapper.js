import {AdminDB}from "../ui-components";
import React from 'react';
import { API } from 'aws-amplify';
import { TextAreaField } from '@aws-amplify/ui-react';
import { deleteReleases, deleteStudent, deleteParkingSpot, createParkingSpot, updateStudent, createStudent } from "../graphql/mutations";
import { myListParkingSpots, myListStudents, myListReleases } from "../graphql/myQueries";

export default class DataBaseWrapper extends React.Component {
 
    constructor(props) {
    
      super(props);
      this.state = ({
              input: "",
          });
          //TODO: set Released based on user data
    }

    async deleteRelease(release) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                
                query: deleteReleases, variables: { input: { id: release.id, _version: release._version } }

            })
        } catch (err) {
            console.log({ err });
        }
    }

    async deleteReleases(){
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.               
                query: myListReleases
            }).then(result => {
                for (let i = 0; i < result.data.listReleases.items.length; i++) {
                    this.deleteRelease(result.data.listReleases.items[i]);
                  }
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async deleteStudent(student) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                
                query: deleteStudent, variables: { input: { id: student.id, _version: student._version } }

            })
        } catch (err) {
            console.log({ err });
        }
    }

    async deleteStudents(){
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.               
                query: myListStudents
            }).then(result => {
                for (let i = 0; i < result.data.listStudents.items.length; i++) {
                    this.deleteStudent(result.data.listStudents.items[i]);
                  }
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async deleteParkingSpot(parkingSpot) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                
                query: deleteParkingSpot, variables: { input: { id: parkingSpot.id, _version: parkingSpot._version } }

            })
        } catch (err) {
            console.log({ err });
        }
    }

    async deleteParkingSpots(){
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.               
                query: myListParkingSpots
            }).then(result => {
                for (let i = 0; i < result.data.listParkingSpots.items.length; i++) {
                    this.deleteParkingSpot(result.data.listParkingSpots.items[i]);
                  }
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async createParkingSpot(lot, num) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                query: createParkingSpot, variables: { input: { 
                    lot: lot, 
                    number: num,
                } }
            })
        } catch (err) {
            console.log({ err });
        }
    }
    
    async createAssignedParkingSpot(lot, num, student) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                query: createParkingSpot, variables: { input: { 
                    lot: lot, 
                    number: num,
                    parkingSpotStudentId: student.id,
                } }
            }).then(result =>{
                this.updateStudentParkingSpot(student, result.data.createParkingSpot)
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async updateStudentParkingSpot(student, parkingSpot){
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                query: updateStudent, variables: { input: { 
                    id: student.id,
                    _version: student._version,
                    studentParkingSpotId: parkingSpot.id
                } }
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async createStudent(firstName, lastName, email, studentID) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                query: createStudent, variables: { input: { 
                    firstName: firstName,
                    lastName: lastName,
                    studentEmail: email,
                    studentID: studentID, 
                } }
            })
        } catch (err) {
            console.log({ err });
        }
    }

    async createStudentWithParkingSpot(firstName, lastName, email, studentID, lot, parkingSpotNumber) {
        try {
            await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
                query: createStudent, variables: { input: { 
                    firstName: firstName,
                    lastName: lastName,
                    studentEmail: email,
                    studentID: studentID, 
                } }
            }).then(result => { 
                this.createAssignedParkingSpot(lot, parkingSpotNumber, result.data.createStudent)
            })
        } catch (err) {
            console.log({ err });
        }
        
    }


    uploadCSV(){
        const firstName = 0;
        const lastName = 1;
        const studentEmail = 2;
        const studentID = 3;
        // const lot = 4;
        // const number = 5;
        
        let rows = this.state.input.split(/\r?\n|\r/);

        for (let i = 0; i < rows.length; i++) {
            
            let rowFields = rows[i].split(',');
            if(rowFields[firstName] == "First Name"){ 
                //discard header row
            }else if(rowFields.length<4){//changes to 6 if we revert back
                //discard empty row
            // }else if(rowFields[lot] != ""){
            //     if(rowFields[studentEmail] != ""){
            //         this.createStudentWithParkingSpot(rowFields[firstName], rowFields[lastName], rowFields[studentEmail], rowFields[studentID], rowFields[lot], rowFields[number])
            //     }else{
            //         this.createParkingSpot(rowFields[lot], rowFields[number])
            //     }
            }else {
                this.createStudent(rowFields[firstName], rowFields[lastName], rowFields[studentEmail], rowFields[studentID])
            }
        }
        

    }

    adminOverrides = {
        "LoadCSV": { 
            onClick: () => {
                if (window.confirm("are you sure you want to add this to the database?") == true) {
                    this.uploadCSV();
                }
            }
        },
        "ClearAll": { 
            onClick: () => {
                if (window.confirm("ARE YOU SURE YOU WANT TO DELETE *EVERYTHING* IN THE DATABASE?") == true) {
                    this.deleteParkingSpots();
                    this.deleteReleases();
                    this.deleteStudents();
                }
            }
        },
    }


    render (){
    
        return (
            <div>
                <AdminDB overrides={this.adminOverrides} />
                <TextAreaField // Insert a TextAreaField Component (since Figma doesn't have it yet)
                    name="Input"
                    onChange={(event) => { this.setState({ input: event.target.value }); }}
                    value={this.state.input}
                    labelHidden={true}
                    rows="10"
                    resize="vertical"
                />
            </div>
        )
    }
}