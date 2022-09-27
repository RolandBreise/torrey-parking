import {Admin}from "../ui-components";
import React from 'react';
import { API } from 'aws-amplify';
import { TextAreaField } from '@aws-amplify/ui-react';
import { deleteReleases, deleteStudent, deleteParkingSpot, createParkingSpot, updateStudent, createStudent } from "../graphql/mutations";
import { myListParkingSpots, myListStudents, myListReleases } from "../graphql/myQueries";
import DataBaseWrapper from "./DataBaseWrapper";
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import StudentListWrapper from "./StudentListWrapper";

export default class AdminWrapper extends React.Component {
 
    constructor(props) {
    
      super(props);
      this.state = ({
              input: "",
          });
          //TODO: set Released based on user data
    }

    adminOverrides = {
        "Logout": { 
            onClick: () => {
                this.props.logout(); 
            }
        },
    }


    render (){
    
        return (
            <div>
                <Admin overrides={this.adminOverrides} />
                <Tabs>
                    <TabItem title="Student List">
                        <StudentListWrapper/>
                    </TabItem>
                    <TabItem title="Edit Database">
                        <DataBaseWrapper/>
                    </TabItem>
                </Tabs>
            </div>
        )
    }
}