import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar';
import Img from './componentesLogin/Img';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Img photo="../assets/img/logo.png" />
      </div>
    );
  };
};

export default App;