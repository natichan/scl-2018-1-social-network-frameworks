import React, { Component } from 'react';
import Navbar from './componentesWall/Navbar'
import {Row, Button, Col, Icon} from 'react-materialize';
import './componentesFriends/friends.css';
import fire from "./../config/firebase";
import deff from './../assets/img/default.png'

class Friends extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      url:"",
      displayName:"",
      users: [] }
  }
  componentDidMount() {
    this.getMessages()
  }
  getMessages = () => {
    var messagesDB = fire
      .database()
      .ref("users/")
      // cantidad de comentarios que se pueden visualizar 
      // .limitToLast(15)
    messagesDB.on("value", snapshot => {
      let newUser = []
      // console.log('snapshot:',snapshot);
      let key=0;
      snapshot.forEach(child => {

        var users = child.val()
        // console.log('users:',users);
        newUser.push({ key: key,url:users.photoUrl,displayName:users.displayName })
        key++;
      })
       this.setState({ users:newUser })
    })
  }

    render() {
      return (
        <Row>
          <Navbar />
          <Col className='col s12'>
            {this.state.users.map(users =>
                <div id={users.key} key={users.key}>
                    <div  className='center did'><img className='circle ' alt='foto' src={
                      users.url===''? deff:users.url}
                      height="100" width="100"></img>
                      <p>{users.displayName}</p>
                      <Button className='colorButton'> Friend<Icon left>add</Icon></Button> 
                    </div>
                </div>
            )}
            </Col>
        </Row> 
      );
    }
  }

export default Friends;