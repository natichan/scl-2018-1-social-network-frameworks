import React from 'react';
import './Login.css';
import {Row, Input, Icon, Button, Col} from 'react-materialize'

class LoginForm extends React.Component {

  render() {
    return ( 
    <Row className="example">
    <Col s={12}>
      <Input s={12} type="email" label="Email"><Icon>account_circle</Icon></Input>
      <Input s={12} type="password" label="password" ><Icon>lock</Icon></Input>   
      <Button className='ButtonLarge1' waves='light' node='a' href=''> Login </Button>
    </Col>
    </Row>
    );
  }
}

export default LoginForm;
