import React from 'react';
import './Login.css';
import {Row, Input, Icon, Button, Col} from 'react-materialize'
import fire from '../../config/firebase';

class LoginForm extends React.Component {
constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
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
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
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
      <div className="center">
      <Button s={6} className='ButtonLarge1' waves='light' node='a' href='' type="submit" onClick={this.login}> Login </Button>
      <Button s={6} className='ButtonLarge1' waves='light' node='a' onClick={this.signup}> REGISTER*</Button>
      </div>
    </Col>
    
    </Row>
    );
  }
}

export default LoginForm;