import logo from './logo.svg';
import './App.css';
import {CommingSoon, LoginScreen}from "./ui-components";
import React from 'react';
import LoginWrapper from './wrappers/LoginWrapper'
import ParkingWrapper from './wrappers/ParkingWrapper'
import NoParkingWrapper from './wrappers/NoParkingWrapper'
import AdminWrapper from './wrappers/AdminWrapper'
import HomeScreenWraper from './wrappers/HomeScreenWrapper';



class App extends React.Component {
 
  constructor(props) {

    super(props);

    this.UID = 0;

    this.state = ({
      logingIn: false,
      student: null,
      hasSpot: false,
    });

    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.toggleLoginScreen = this.toggleLoginScreen.bind(this);
  }

  

  login (student){
    this.setState({
      student: student,
    })
    localStorage.setItem("StudentEmail", student.studentEmail);
    localStorage.setItem("StudentID", student.studentID);
  }

  logout (){
    this.setState({
      student: null,
      logingIn: false,
    })
    localStorage.removeItem("StudentEmail"); // clear the local storage
    localStorage.removeItem("StudentID");
  }

  toggleLoginScreen(){
    this.setState({logingIn: !this.state.logingIn})
  }

  render (){
    // return(
    //   <div>
    //     <CommingSoon
    //       LogoUrl = {"LJCDS_Web_500_x2.png"}
    //     />
    //   </div>
    // )
    
    if (this.state.student){
      if(this.state.student.studentEmail == "Admin"){
        return(
          <div>
            <AdminWrapper
              logout = {this.logout}
            />
          </div>
        )
      }else {//if(this.state.student.studentParkingSpotId){
        return (
          <div>
            <ParkingWrapper
            logout = {this.logout}
            student = {this.state.student}
            key = {this.UID++}
            />
          </div>
        )
      } // else {
      //   return (
      //     <div>
      //       <NoParkingWrapper
      //       logout = {this.logout}
      //       student = {this.state.student}
      //       key = {this.UID++}
      //       />
      //     </div>
      //   )
      // }
    }else {
      if(this.state.logingIn){
        return (
          <div className="App">
            <LoginWrapper 
            login = {this.login}
            leaveLogin = {this.toggleLoginScreen}
            />
          </div>
        );
      }else{
        return (
          <div className="App">
            <HomeScreenWraper goToLogin = {this.toggleLoginScreen}/>
          </div>
        );
      }
    }
  }

    
    
}
  


export default App;
