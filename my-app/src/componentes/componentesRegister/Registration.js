import React from 'react';
import './Register.css';
import {Row, Input, Icon, Button} from 'react-materialize'
import {Col} from 'react-materialize'

class InputAdornments extends React.Component {

  render() {

    return (    

    <Row className="example">
    <Col s={12}>
      <Input s={12} type="email" label="Email"><Icon>account_circle</Icon></Input>
      <Input s={12} type="password" label="password" ><Icon>lock</Icon></Input>
        <Col s={12} className='ButtonLarge'>
          <Button className='ButtonLarge1' waves='light' node='a' href='http://www.google.com'> REGISTRATE </Button>
        </Col>
    </Col>
    </Row>
    );
  }
}

export default InputAdornments;
