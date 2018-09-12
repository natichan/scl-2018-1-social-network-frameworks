import React, { Component } from 'react';
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'

class App extends Component {
  render() {
    return (
      <div>
        <Img photo= {ImagenLogo} />
      </div>
    );
  };
};

export default App;