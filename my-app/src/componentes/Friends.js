import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import {Row, Card, Col} from 'react-materialize';
import './../App.css'

class Friends extends Component {
    render() {
      return (
        <Row  className='green'>
          <Navbar /> 
          <Col className='RowFriends' s={12}>
            <Card className=' card '></Card>
          </Col>
        </Row> 
      );
    }
  }

export default Friends;