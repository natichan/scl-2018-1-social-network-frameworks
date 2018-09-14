import React, { Component } from 'react';
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'

class Login extends Component {
  render() {
    return (
      <div>
        <Img photo= {ImagenLogo}/>
      </div>
    );
  };
};

export default Login;