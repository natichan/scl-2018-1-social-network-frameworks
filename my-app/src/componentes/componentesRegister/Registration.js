import React from 'react';
import './Register.css';
import {Row, Input} from 'react-materialize'
import {Col} from 'react-materialize'

class InputAdornments extends React.Component {

  render() {

    return (    
      
    <Row className="example">
    <Col s={12} className='grid-example'>
        <Input s={12} type="password" label="password" />
        <Input s={12} type="email" label="Email" />
    </Col>
    </Row>
    );
  }
}

export default InputAdornments;
