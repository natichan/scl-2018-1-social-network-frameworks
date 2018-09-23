import React, { Component } from 'react';
import Picture from './componentsProfile/Picture';
import Navbar from './componentesWall/Navbar';
import {Row, Card, Col} from 'react-materialize';

class Profile extends Component {
    render() {
      return (
        <div>
            <Navbar />
            <Row>
              <Col>
                <Card className='card'>
                <Picture />
            </Card>
              </Col> 
            </Row>
        </div> 
      );
    }
  }

export default Profile;