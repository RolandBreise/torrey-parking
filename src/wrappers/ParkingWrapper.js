import {Parking}from "../ui-components";
import React from 'react';

export default class ParkingWrapper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
            Released: false
        });
        //TODO: set Released based on user data
  }

  parkingOverrides = {
    
    "GiveUpParking": { 
        onClick: () => {
            if(this.state.Released == false){
                this.setState({Released: true})
            }else{
                this.setState({Released: false})
            }      

        }
    },
    "LogoutButton": { 
        onClick: () => {
             this.props.logout()

        }
    },
}

  render (){
    
      return (
        <Parking 
            overrides={this.parkingOverrides}
            ButtonLabel={this.state.Released ? "Reclaim Parking" : "Release Parking"}
            GiveUpParking={this.state.GiveUpParking}
            PointsTracker={"points: " + 1}
        />
      )
    }
    

  
}