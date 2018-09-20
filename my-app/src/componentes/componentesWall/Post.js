import React, { Component } from "react"
import {Row, Input,Collection, CollectionItem} from 'react-materialize'
import firebase from "firebase"
import './wall.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
	text: "", 
	messages: [] }
  }
}

export default App
