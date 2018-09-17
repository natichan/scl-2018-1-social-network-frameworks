import React, { Component } from 'react';
//import ImagenLogo from './../../assets/img/veganHamburguer.jpg';
import {Row, Slider, Slide, Col} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import './wall.css'
class App extends Component {
    render() {
      return (
        <Row >
          <Col s={12}>
          <Slider>
            <Slide
              src={imgh} >
            </Slide>
            <Slide
              src={imgI}>
            </Slide>
            <Slide
              src={imgJ}>
            </Slide>
          </Slider> 
          </Col>
        </Row> 
      );
    }
  }

export default App;