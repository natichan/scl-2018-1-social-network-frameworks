import React, { Component } from 'react';
import {Row, Slider, Slide, Col, Input} from 'react-materialize'
import imgh from './../../assets/img/veganHamburguer.jpg'
import imgI from './../../assets/img/vegan-food-selection-t.jpg'
import imgJ from './../../assets/img/green-kitchen-stories-meal-inspiration.jpg'
import deff from './../../assets/img/default.png'
import fire from "./../../config/firebase"
import './wall.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: "", 
      url:"",
      name:"",
      messages: [] }
  }
  componentDidMount() {
    this.getMessages()
  }

  onSubmit = event => {
    if (event.charCode === 13 && this.state.text !== "") {
      
      let user=fire.auth().currentUser;
      var url=user.photoURL;
      var name=user.displayName;
      this.writeMessageToRS(this.state.text,url,name)
      this.setState({ text: "",url:"" , name:""})
    }
  }
  writeMessageToRS = (message,url,name) => {
   fire
      .database()
      .ref("messages/")
      .push({
        text: message,
        url:url,
        name:name
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
        if(!message.url)
        message.url="";
        if(!message.name)
        message.name="";
        newMessages.push({ key: key,text: message.text,url:message.url,name:message.name })
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
        <Col l={12}className='divinpt'>
          <Input className='inpt2'  type='text'placeholder='¿💚 Que tal tu día Veggie 💚? '  s={12} 
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
                {/* <img className='circle' src={message.url==''? deff:message.url}  height="42" width="42"></img> */}
                {/* deff es la img para cuando no tiene  */}
                <p className=' divPost '><img className='circle' src={message.url==''? deff:message.url}  height="42" width="42"></img><b>{message.name+" : "}</b>{ message.text}</p>
                <a className=' btn formaticondiv'><i class="material-icons iconolike ">thumb_up_alt</i></a>
                <a className='formaticondiv btn'><i class="material-icons blue-text">border_color</i></a>
                <a className=' btn formaticondiv'><i class="material-icons icondelet">delete</i></a>


              </div>
            )}
          </form>
        </Col>
      </Row> 
    );
  }
  }

export default App;
