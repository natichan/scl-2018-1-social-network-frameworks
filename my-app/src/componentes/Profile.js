import React, { Component } from 'react';
import Form from './componentsProfile/Form';
import Picture from './componentsProfile/Picture';
import Navbar from './componentesWall/Navbar';
import ExamplePic from '../assets/img/foto-perfil.jpg';
import {Row, Card, Col} from 'react-materialize';

class Profile extends Component {
    render() {
      return (
        <div>
            <Navbar />
            <Picture photo = {ExamplePic}/>
            <Row>
              <Col s={12}>
                <Card className='card'>
                <Form />
            </Card>
              </Col> 
            </Row>
        </div> 
      );
    }
  }

export default Profile;