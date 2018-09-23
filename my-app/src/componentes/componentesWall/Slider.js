import React, { Component } from 'react';
import {Row, Slider, Slide, Col, Input} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import fire from "./../../config/firebase"
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
   fire
      .database()
      .ref("messages/")
      .push({
        text: message
      })
  }

  getMessages = () => {
    var messagesDB = fire
      .database()
      .ref("messages/")
      // cantidad de comentarios que se pueden visualizar 
      .limitToLast(15)
    messagesDB.on("value", snapshot => {
      let newMessages = []
      console.log('snapshot:',snapshot);
      let key=0;
      snapshot.forEach(child => {

        var message = child.val()
        console.log('message:',message);
        newMessages.push({ key: key,text: message.text })
        key++;
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
        <Col l={12}className='inpt'>
          <Input  type='text'placeholder='¿💚 Que tal tu día Veggie 💚? 😀'  s={12} 
            onChange={event => this.setState({ text: event.target.value })}
            value={this.state.text}
            onKeyPress={this.onSubmit}/>
        </Col>

        <Col   s={12}  id='post_list' >
          <form id='form_01'>
            {this.state.messages.map(message =>
            // identificar con id cada post
              <div id={'div_'+message.key} key={'div_'+message.key} >
                <br/>
                <p className=' divPost '>{message.text}</p>
              </div>
            )}
          </form>
        </Col>
      </Row> 
    );
  }
  }

export default App;
