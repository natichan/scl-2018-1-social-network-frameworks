import React, { Component } from 'react';
//import ImagenLogo from './../../assets/img/veganHamburguer.jpg';
import {Row, Slider, Slide, Col, Input, Button} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import LogoNavbar from './LogoNavbar';
import ImageLogo from '../../assets/img/logotipoHorizontalBordeBlanco (1).png'

import './wall.css'
class App extends Component {
    render() {
      return (
        <Row className=' white inputxt '>
          <Col  s={12} className=' imgu' >
          <Slider >
            <Slide className='imgu' src={imgh} >
            </Slide>
            <Slide src={imgI}>
            </Slide>
            <Slide src={imgJ}>
            </Slide>
          </Slider> 
          </Col>
          <Col l={12}>
          <Input type='text'placeholder='¿Que tal tu día Veggie?'  s={12} />
          <Button waves='light' className='green' s={12}>Publicar</Button>

          </Col>
        </Row> 
      );
    }
  }

export default App;