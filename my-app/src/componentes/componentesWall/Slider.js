import React, { Component } from 'react';
//import ImagenLogo from './../../assets/img/veganHamburguer.jpg';
import {Row, Slider, Slide, Col, Input, Button} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import './wall.css'
class App extends Component {
    render() {
      return (
        <Row className=' white inputxt'>
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
          <div >
          <Input type='text' s={10}  />
          <Button waves='light' className='green'>Publicar</Button>

          </div>
        </Row> 
      );
    }
  }

export default App;