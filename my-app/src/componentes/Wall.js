import React, { Component } from 'react';
// // import Friends from './Friends';
 import Navbar from './componentesWall/Navbar'
 import Slider from './componentesWall/Slider'

class Wall extends Component {
    render() {
      return (
        <div>
          <Navbar /> 
          <Slider/>
          {/* <Friends/> */}
        </div> 
      );
    }
  }

export default Wall;