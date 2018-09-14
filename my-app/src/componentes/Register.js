import React, { Component } from 'react';
import Registration from './componentesRegister/Registration'
import Img from './../componentes/componentesLogin/Img'
import ImagenLogo from './../assets/img/logo.png'


class Register extends Component {
    render() {
      return (
        <div className="App">
          <Img photo= {ImagenLogo}/>
          <Registration />
        </div>
      );
    }
  }

export default Register;
