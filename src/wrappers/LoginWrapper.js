import {LoginScreen}from "../ui-components";
import React from 'react';

export default class LoginWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
        email: "joh",
        studentID: "361183",
        errorMsg: null,
        });
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
            if(this.state.email == "josh"){
                if(this.state.studentID == "123456"){
                    //tell app we are done here
                }else{
                    this.setState({errorMsg: "wrong ID... try again"})
                }    
            }else{
                this.setState({errorMsg: "wrong email... try again"})
            }      

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
