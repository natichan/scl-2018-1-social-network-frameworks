import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import {Row, Card, Col, Button, Icon} from 'react-materialize';
import One from '../assets/img/blake.jpeg';
import Img from './componentesFriends/Img'
import './componentesFriends/friends.css'

class Friends extends Component {
    render() {
      return (
        <Row>
          <Navbar />
          <Img photo={One} />
          <Button floating large className='red' waves='light' icon='add' />
          <Button waves='light'>button<Icon left>add</Icon></Button>

        </Row> 
      );
    }
  }

export default Friends;