import React from 'react';
import './Login.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Register from '../Register';
import './Login.css';

const RegisterButton = () => { 
        return (
            <Router>
                <div>
                    <Link to="/register"><p className="link center">Register</p></Link>
                    <Route path="/register" component={Register} exact />
                </div>
            </Router>  
        )
    
}

export default RegisterButton;