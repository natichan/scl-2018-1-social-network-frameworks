import React, {Component} from 'react';
import './Login.css'
import {Link} from 'react-router-dom';


class RegisterButton extends Component {
    render() {
        return (
            <Link to="/Register">Register</Link>
        )
    }
}

export default RegisterButton;