import React, { Component } from 'react';
//import ImagenLogo from './../../assets/img/veganHamburguer.jpg';
import {Row, Slider, Slide} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'

class App extends Component {
    render() {
      return (
  <Row>
       <Slider>
  <Slide
    src={imgh} >
  </Slide>
  <Slide
    src={imgI}

    >
  </Slide>
  <Slide
    src={imgJ}
   
   >
  </Slide>
</Slider> 
  </Row> 
      );
    }
  }

export default App;