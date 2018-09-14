import React, { Component } from 'react';
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'
import Button from './componentesLogin/ButtonFG'
import Init from './componentesLogin/Init'
import RegisterButton from './componentesLogin/RegisterButton';


class Login extends Component {
  render() {
    return (
      <div>
        <Img photo= {ImagenLogo}/>
        <Init />
        <Button />
        <RegisterButton />
      </div>
    );
  };
};

export default Login;