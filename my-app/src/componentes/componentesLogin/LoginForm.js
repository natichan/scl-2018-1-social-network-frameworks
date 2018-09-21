import React, { Component } from 'react';
import './Login.css';
import {Row, Input, Icon, Button, Col} from 'react-materialize'
import fire from '../../config/firebase';

class LoginForm extends React.Component {
constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return ( 
    <Row className="example">
    <Col s={12}>
      <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email"  placeholder="Email">
        <Icon>account_circle</Icon>
      </Input>
      <Input s={12} type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}>
        <Icon>lock</Icon>
      </Input>   
      <Button className='ButtonLarge1' waves='light' node='a' href='' type="submit" onClick={this.login}> Login </Button>
    </Col>
    </Row>
    );
  }
}

export default LoginForm;