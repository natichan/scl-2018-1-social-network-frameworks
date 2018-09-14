import React, { Component } from 'react';
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'
import Button from './componentesLogin/ButtonFG'

class Login extends Component {
  render() {
    return (
      <div>
        <Img photo= {ImagenLogo}/>
        <Button />
      </div>
    );
  };
};

export default Login;