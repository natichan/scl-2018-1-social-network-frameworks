import React, { Component } from 'react';
import Img from './componentesLogin/Img';
import ImagenLogo from '../assets/img/logo.png'
import ButtonFG from './componentesLogin/ButtonFG'
import LoginForm from './componentesLogin/LoginForm'
import {Row, Card, Col} from 'react-materialize';


class Login extends Component {
  render() {
    return (
        <Row >
          <Col s={12}>
            <Card  className='card'>
              <Img photo= {ImagenLogo}/>
              <LoginForm />
              <ButtonFG />
              <p className="center">*Don't have an account yet? Press Register button to save your email and password</p>
            </Card> 
          </Col>
        </Row>
    );
  };
};

export default Login;