import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import Slider from './componentesWall/Slider'

class Wall extends Component {
    render() {
      return (
        <div>
          <Navbar /> 
          <Slider/>
        </div> 
      );
    }
  }

export default Wall;