import {HomeScreen}from "../ui-components";
import React from 'react';
import { listParkingSpots, listReleases } from "../graphql/queries";
import { API } from 'aws-amplify';
import { today } from "./util";
import { DataStore } from "aws-amplify";
import { ParkingSpot, Releases } from '../models';
import { Tabs, TabItem } from '@aws-amplify/ui-react';


export default class HomeScreenWraper extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = ({
//        unassignedSpots: [],
        releasedSpots: [],
    });
  }

  componentDidMount(){
    this.getReleasedSpots(today())
   // this.getUnassignedSpots()
    this.releasesSubscription = DataStore.observe(Releases).subscribe(msg => { // subscribe to changes in releases to update released spot list
      this.getReleasedSpots(today());
    });
  }
    
  //  this.spotsSubscription = DataStore.observe(ParkingSpot).subscribe(msg => { // subscribe to changes in releases to update released spot list
  //    this.getUnassignedSpots();
  //  });

  componentWillUnmount() {
    this.releasesSubscription.unsubscribe(); // Cancel the DataStore subscriptions so we don't have a bunch of network traffic.
  //  this.spotsSubscription.unsubscribe();
  }

  // async getUnassignedSpots(){
  //   try {
  //     await API.graphql({
  //       query: listParkingSpots, variables: { filter: { parkingSpotStudentId: { attributeExists: false } } } // find the unassigned spots
  //     }).then(spots => this.setState({
  //       unassignedSpots: spots.data.listParkingSpots.items // update App State
  //     }))
  //   } catch (err) {
  //       console.log({ err });
  //   }
  // }

  async getReleasedSpots(date){
    try {
      await API.graphql({
        query: listReleases, variables: { filter: { date: {eq: date} } } 
      }).then(releases => this.setState({
        releasedSpots: releases.data.listReleases.items // update App State
      }))
    } catch (err) {
        console.log({ err });
    }
  }

  noParkingOverrides = {
    "LoginButton": { 
        onClick: () => {
          this.props.goToLogin()

        }
    },
    

    
}

  // getSpotLot(lot){
  //   return(
  //   this.state.releasedSpots.filter( release => release.lot == lot )
  //                   .concat(this.state.unassignedSpots.filter( spot => spot.lot == lot ))
  //                   .sort( (a,b) => a.number < b.number)
  //                   .map(spot => spot.number)
  //                   .toString()
  //   )
  // }

  render (){

    // let gymSpots = this.getSpotLot("gym");
    // let mainSpots = this.getSpotLot("main");

      return (
        
          <HomeScreen 
              overrides={this.noParkingOverrides}
              Date={today()}
              SpotCounter= {"Junior Spots: " + this.state.releasedSpots.length}
              LogoURL={"LJCDS_Web_500_x2.png"}
              // Spots={gymSpots}
              // HeaderText={"Gym Lot"}
            />
          
        
      )
    }
    

  
}