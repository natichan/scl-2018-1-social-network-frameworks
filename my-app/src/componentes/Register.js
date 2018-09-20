import React, { Component } from 'react';
import Registration from './componentesRegister/Registration';
import Img from './../componentes/componentesLogin/Img';
import ImagenLogo from './../assets/img/logo.png';
import {Row, Card, Col} from 'react-materialize';
import './componentesRegister/Register.css'


class Register extends Component {
    render() {
      return (
        <Row>
          <Col s={12}>
            <Card  className='card'>
              <Img photo= {ImagenLogo}/>
              <Registration />
          </Card> 
        </Col>
       </Row>
      );
    }
  }

export default Register;
