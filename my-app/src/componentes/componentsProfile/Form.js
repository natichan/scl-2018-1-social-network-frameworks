import React, {Component} from 'react';
import './profile.css';
import {Row, Input, Button} from 'react-materialize';

class Form extends Component {
    render() {
        return (
            <Row>           
                <Input s={6} label="First Name" />
                <Input s={6} label="Last Name" />
                <Input label="Birthday" s={12} />
                <Input type="textarea" label="About me" s={12}/> 
                <div className="center">
                <Button s={3} waves='light' node='a' href='' className="button"> Save </Button>
                </div>
            </Row>
        )
    }
}

export default Form;