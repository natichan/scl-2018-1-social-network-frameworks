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

    
  
  
  }

export default App;
