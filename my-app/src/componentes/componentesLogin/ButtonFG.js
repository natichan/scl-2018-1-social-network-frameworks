import React, { Component } from 'react';
import {Button} from 'react-materialize'
import './Login.css'

class ButtonsFaceGoo extends Component {
  render() {
    return (
        <div>
            <Button waves='light' className='facebook' node='a' href=''> Facebook </Button>
            <Button waves='light' className='google' node='a' href=''> Google </Button>
        </div>
    );
  }
}

export default ButtonsFaceGoo;



