import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';
import Navbar from '../componentesWall/Navbar'

class Form extends Component {
    render() {
        return (
            <div>
            <Navbar />
                <Row>
                    <Input placeholder="Placeholder" s={6} label="First Name" />
                    <Input s={6} label="Last Name" />
                    <Input label="Birthday" s={12} />
                    <Input label="About me" s={12} />
                </Row>
            </div>
        )
    }
}

export default Form;