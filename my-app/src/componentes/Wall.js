import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import Slider from './componentesWall/Slider'

class Wall extends Component {
    render() {
      return (
        <div className="App">
          <Navbar />
          <Slider/>
        </div> 
      );
    }
  }

export default Wall;