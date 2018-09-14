import React from 'react';
import './Login.css';
import {Row, Input, Icon} from 'react-materialize'
import {Col} from 'react-materialize'

class InputAdornments extends React.Component {

  render() {
    return ( 
    <Row className="example">
    <Col s={12}>
      <Input s={12} type="email" label="Email"><Icon>account_circle</Icon></Input>
      <Input s={12} type="password" label="password" ><Icon>lock</Icon></Input>
    </Col>
    </Row>
    );
  }
}

export default InputAdornments;
