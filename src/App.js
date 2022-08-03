import logo from './logo.svg';
import './App.css';
import {LoginScreen}from "./ui-components";
import React from 'react';
import LoginWrapper from './wrappers/LoginWrapper'

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({screens: "login"});
  }

  render (){
    if (this.state.screens == "login"){
      return (
        <div className="App">
          <LoginWrapper />
        </div>
        );
    }else{
      return (
        <div>
          Thiefsh
        </div>
      )
    }
    
  }
  
}

export default App;
