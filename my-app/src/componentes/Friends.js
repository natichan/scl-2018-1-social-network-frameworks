import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import {Row, Button, Icon} from 'react-materialize';
import One from '../assets/img/blake.jpeg';
import Img from './componentesFriends/Img'
import './componentesFriends/friends.css'

class Friends extends Component {
    render() {
      return (
        <Row>
          <Navbar />
          <div>
            <div className='center did'>
              <Img photo={One} />
              <Button className='colorButton'> Friend<Icon left>add</Icon></Button>
            </div>
            <div className='center did'>
            <Img photo={One} />
              <Button className='colorButton'> Friend<Icon left>add</Icon></Button> 
            </div>
            <div className='center did'>
            <Img photo={One} />
              <Button className='colorButton'> Friend<Icon left>add</Icon></Button> 
            </div>
            <div className='center did'>
            <Img photo={One} />
              <Button className='colorButton'> Friend<Icon left>add</Icon></Button> 
            </div>
          </div>
          
        </Row> 
      );
    }
  }

export default Friends;