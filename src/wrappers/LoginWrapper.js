import {LoginScreen}from "../ui-components";
import React from 'react';
import { API } from 'aws-amplify';
import { myListStudents } from '../graphql/myQueries';

export default class LoginWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
        email: "",
        studentID: "",
        errorMsg: null,
        });
  }

  componentDidMount(){
    const email = localStorage.getItem("StudentEmail");
    const id = localStorage.getItem("StudentID");
    if(email && id){
      this.findStudent(email, id)
    }
  }

  // Lookup the supplied email/id and if it is in the DB, then set the state to the that user/student
  async findStudent(email, id) {
    if(email == "Admin" && id == "LJCDS1926"){
      this.props.login({studentEmail: email, studentID: id})
    }else{
      if (email && id) {
        try {
          await API.graphql({ // THIS IS AN async function that generates a 'promise' and then waits on it to update the component state.
            query: myListStudents, variables: { filter: { studentEmail: { eq: email }, studentID: { eq: id } } }
          }).then(students => {
            if(students.data.listStudents.items.length > 0){
              this.props.login(students.data.listStudents.items[0])
            }else{
              this.setState({
                errorMsg: "wrong login... try again"
              })
            }
          })
        } catch (err) {
          console.log({ err });
        }
      }
    }
  }

  loginOverrides = {
    
    "StudentEmail": { 
        onChange: (event) => {
          this.setState({
            email: event.target.value,
            errorMsg: "",
          });
        }
    },
    "StudentID": { 
        onChange: (event) => {
          this.setState({
            studentID: event.target.value,
            errorMsg: "",
          });
        }
    },
    "LoginButton": { 
        onClick: () => {
            if(this.state.email == ""){
              this.setState({errorMsg: "please enter an email..."})
            }else if(this.state.studentID == ""){
              this.setState({errorMsg: "please enter an ID..."})
            }else{
              this.findStudent(this.state.email, this.state.studentID)
            }
                 

        }
    },
    "Cancel": { 
      onClick: () => {
        this.props.leaveLogin()

      }
  },
}

  render (){
    
      return (
        <LoginScreen 
            overrides={this.loginOverrides}
            email = {this.state.email} 
            ID = {this.state.studentID}
            failMsg = {this.state.errorMsg}
        />
      )
    }
    

  
}
