import React, { Component } from "react"
import { Input} from 'react-materialize'
import firebase from "firebase"
import './wall.css'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
	text: "", 
	messages: [] }
  }

  componentDidMount() {
    var config = {
        apiKey: "AIzaSyD-O18UUFp3xJIPqSPPnLwrj-R_k4LoDAU",
        authDomain: "redsocialreact-bf847.firebaseapp.com",
        databaseURL: "https://redsocialreact-bf847.firebaseio.com",
        projectId: "redsocialreact-bf847",
        storageBucket: "redsocialreact-bf847.appspot.com",
        messagingSenderId: "335447925232"
    }

    firebase.initializeApp(config)
    this.getMessages()
  }

}