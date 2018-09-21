import React from 'react';
import './Register.css';
import {Row, Input, Icon, Button} from 'react-materialize'
import {Col} from 'react-materialize'
import fire from '../../config/firebase'

class InputAdornments extends React.Component {
  constructor(props) {
    super(props);
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
      <Col s={12} >
        <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email">
          <Icon>account_circle</Icon>
        </Input>
        <Input  s={12} value={this.state.password} onChange={this.handleChange} type="password" name="password"  placeholder="Password">
          <Icon >lock</Icon>
        </Input>
      </Col>
      <Col s={12} className='divboton'>
        <Button className='ButtonLarge1' waves='light' node='a' onClick={this.signup}> REGISTRATE </Button>
      </Col>
      
    </Row>
    );
  }
}

export default InputAdornments;
