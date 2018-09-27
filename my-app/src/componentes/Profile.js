import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar';
import {Row} from 'react-materialize';
import Form from './componentsProfile/Form'

class Profile extends Component {
    render() {
      return (
        <div>
            <Navbar />
            <Row>
                <Form />
            </Row>
        </div> 
      );
    }
  }

export default Profile;