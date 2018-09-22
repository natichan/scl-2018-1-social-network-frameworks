import React, { Component } from 'react';
import {Row, Slider, Slide, Col, Input} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import firebase from "firebase"
import './wall.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
	text: "", 
	messages: [] }
  }
  componentDidMount() {
 
    this.getMessages()
  }

  onSubmit = event => {
    if (event.charCode === 13 && this.state.text !== "") {
      this.writeMessageToRS(this.state.text)
      this.setState({ text: "" })
    }
  }
  writeMessageToRS = message => {
    firebase
      .database()
      .ref("messages/")
      .push({
        text: message
      })
  }

  getMessages = () => {
    var messagesDB = firebase
      .database()
      .ref("messages/")
      // cantidad de comentarios que se pueden visualizar 
      .limitToLast(500)
    messagesDB.on("value", snapshot => {
      let newMessages = []
      snapshot.forEach(child => {
        var message = child.val()
        newMessages.push({ key: message.id,text: message.text })
      })
      this.setState({ messages: newMessages })
    })
  }
  render() {
    return (
      <Row className='  inputxt '>
        <Col  s={12} className=' imgu ' >
          <Slider >
            <Slide className='imgu' src={imgh}></Slide>
            <Slide src={imgI}></Slide>
            <Slide src={imgJ}></Slide>
          </Slider> 
        </Col>
        <Col l={12}>
          <Input type='text'placeholder='¿Que tal tu día Veggie?'  s={12} 
            onChange={event => this.setState({ text: event.target.value })}
            value={this.state.text}
            onKeyPress={this.onSubmit}/>
        </Col>

          <Col  s={12} >
            <form >
              
              {this.state.messages.map(message =>
                <div ><br/><p className='white divPost 'key={message.id}>{message.text}</p></div>
              )}
            </form>
          </Col>
      </Row> 
    );
  }
    
  
  
  }

export default App;
