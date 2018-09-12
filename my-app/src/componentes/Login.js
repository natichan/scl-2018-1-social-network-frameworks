import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'
=======
import Navbar from './componentesWall/Navbar';
import Img from './componentesLogin/Img';
>>>>>>> probando el logIn
=======
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'
>>>>>>> enlace imagen

class Login extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <Img photo= {ImagenLogo} />
=======
        <Navbar />
        <Img photo="../assets/img/logo.png" />
>>>>>>> probando el logIn
=======
        <Img photo= {ImagenLogo} />
>>>>>>> enlace imagen
      </div>
    );
  };
};

export default Login;