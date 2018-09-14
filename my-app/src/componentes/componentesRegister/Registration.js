import React from 'react';
import './Register.css';
import {Row, Input} from 'react-materialize'
import {Col} from 'react-materialize'

class InputAdornments extends React.Component {

  render() {

    return (
    <Row >
    <Col s={12} className='grid-example'>
      <Input type="email" label="Email" s={6} />
    </Col>
    <Col s={12} className='grid-example'>
      <Input type="password" label="password" s={6} />
    </Col>

    </Row>
    );
  
  }
}

export default InputAdornments;
