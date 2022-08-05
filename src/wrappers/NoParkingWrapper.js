import {NoParking}from "../ui-components";
import React from 'react';

export default class NoParkingWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
        GymSpots: "a2, a5, a19",
        MainSpots: "b9, b17, b21",
    });
  }

  noParkingOverrides = {
    "LogoutButton": { 
        onClick: () => {
          this.props.logout()

        }
    },
}

  render (){
    
      return (
        <NoParking 
            overrides={this.noParkingOverrides}
            GymSpots={this.state.GymSpots}
            MainSpots={this.state.MainSpots}
        />
      )
    }
    

  
}