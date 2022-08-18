import {AdminStudentList}from "../ui-components";
import React from 'react';
import { API } from 'aws-amplify';
import { TextAreaField } from '@aws-amplify/ui-react';
import { deleteReleases, deleteStudent, deleteParkingSpot, createParkingSpot, updateStudent, createStudent } from "../graphql/mutations";
import { myListParkingSpots, myListStudents, myListReleases } from "../graphql/myQueries";
import PopupWrapper from "./PopupWrapper";
import { Table, TableHead, TableRow, TableBody, TableCell } from '@aws-amplify/ui-react';
import { DataStore } from "aws-amplify";
import { findPoints, today } from "./util";
import { Student, Releases } from '../models';

export default class StudentListWrapper extends React.Component {
 
    constructor(props) {
    
        super(props);
        this.state = ({
            students: [],
            sortField: "lastName",
            sortAsc: true,
            editing: false,
            editingStudent: null,
        });
        this.uniqueKey = 1; // <- in constructor
        this.openEditor = this.openEditor.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
        this.onClickStudent = this.onClickStudent.bind(this);
        this.onClickHeader = this.onClickHeader.bind(this);
    }

    componentDidMount(){
        this.getStudents();
        this.studentsSubscription = DataStore.observe(Student).subscribe(msg => { // subscribe to changes in releases to update released spot list
            this.getStudents();
        });
        this.releasesSubscription = DataStore.observe(Releases).subscribe(msg => { // subscribe to changes in releases to update released spot list
            this.getStudents();
        });
    }

    componentWillUnmount(){
        this.studentsSubscription.unsubscribe(); 
        this.releasesSubscription.unsubscribe(); // Cancel the DataStore subscriptions so we don't have a bunch of network traffic.
    }

    sortStudents(students, field, asc) {
        let numeric = field == "studentID" || field == "points" ? true : false;
        return (students.sort((a, b) => a[field].toString().localeCompare(b[field].toString(), "en", {
            numeric: numeric,
        }) * (asc ? 1 : -1)))
    }

    async getStudents(){
        try {
            await API.graphql({
                query: myListStudents
            }).then(students => {
                let s = students.data.listStudents.items;

                for (let i = 0; i < s.length; i++) {
                    if(s[i].Releases.items){
                        s[i].status = s[i].Releases.items.find(release => release.date == today()) ? "Released" : "Taken"
                        s[i].points = findPoints(s[i].Releases.items)
                    }else {
                        s[i].status = "taken"
                        s[i].points = 0
                    }                    
                }
                this.setState({  // This arrow function gets called when the data comes back
                    students: this.sortStudents(s, this.state.sortField, this.state.sortAsc),
                    //students: students.data.listStudents.items.sort((a, b) => a.lastName < b.lastName ? -1 : 1),
                    reloading: false
                })
            })
        } catch (err) {
            console.log({ err });
        }
    }

    onClickHeader(field){
        if (field == this.state.sortField) { // reverse sort order
            let asc = !this.state.sortAsc;
            this.setState({ sortAsc: asc, students: this.sortStudents(this.state.students, field, asc) });
        } else { // sort by new field
            this.setState({ sortField: field, students: this.sortStudents(this.state.students, field, this.state.sortAsc) });
        }
    }

    openEditor() {
        this.setState({ editing: true });
    }
    closeEditor() {
        this.setState({ editing: false });
    }
    
    onClickStudent(e, s) {
        if (e.detail > 1) { // double click
            this.setState({ editingStudent: s, editing: true });
        }
    }

    adminOverrides = {
        "ReloadButton": { 
            onClick: () => {
                this.getStudents()
            }
        },
        "AddStudentButton": { 
            onClick: () => {
                this.setState({ 
                    editingStudent: {
                        firstName: "",
                        lastName: "",
                        studentEmail: "",
                        studentID: "",
                        Releases: {
                            items: [],
                        },
                    }, 
                    editing: true 
                });

            }
        },
    }


    render (){
        if (this.state.editing) { // student editor showing
            return (
                <PopupWrapper
                    student={this.state.editingStudent}
                    key={this.uniqueKey++} // each time we open the student editor, make sure there is a unique key to trigger the constructor
                    close={this.closeEditor}
                />
            )
        } else {
            return (
                <div>
                    <AdminStudentList overrides={this.adminOverrides} />
                    <Table
                        caption=""
                        highlightOnHover={true}
                        size="small"
                        variation="striped"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell onClick={() => this.onClickHeader("firstName")} as="th">First Name</TableCell>
                                <TableCell onClick={() => this.onClickHeader("lastName")} as="th">Last Name</TableCell>
                                <TableCell onClick={() => this.onClickHeader("studentEmail")} as="th">Email</TableCell>
                                <TableCell onClick={() => this.onClickHeader("studentID")} as="th">Student ID</TableCell>
                                <TableCell onClick={() => this.onClickHeader("status")} as="th">Today's Status</TableCell>
                                <TableCell onClick={() => this.onClickHeader("points")} as="th">Points</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            this.state.students.map((item) =>
                                <TableRow
                                    key={item.id}
                                    onClick={(e) => { this.onClickStudent(e, item) }}
                                >
                                    <TableCell>{item.firstName}</TableCell>
                                    <TableCell>{item.lastName}</TableCell>
                                    <TableCell>{item.studentEmail}</TableCell>
                                    <TableCell>{item.studentID}</TableCell>
                                    <TableCell>{ item.status }</TableCell>
                                    <TableCell>{ item.points }</TableCell>
                                </TableRow>
                            )
                        }
                        </TableBody>
                    </Table>
                </div>
            )
        }
    }
}