import React, { Component } from 'react';
import Picture from './componentsProfile/Picture';
import Navbar from './componentesWall/Navbar';
import {Row, Card, Col} from 'react-materialize';
// import Form from './componentsProfile/Form'
import ProfilePic from '../assets/img/foto-perfil.jpg';

class Profile extends Component {
    render() {
      return (
        <div>
            <Navbar />
            <Row>
                <Picture photo={ProfilePic}/>
                <div class="divider grey"></div>
            </Row>
        </div> 
      );
    }
  }

export default Profile;