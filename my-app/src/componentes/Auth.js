import React, { Component } from 'react';
import fire from '../config/firebase';
import Wall from './Wall';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
     <div>
     {this.state.user ? ( <Wall/>) : (<Login />)} 
     {/* si existe usuario anda al muro, sino muestra la iniciar sesión */}
     </div>
    )
  }
}

export default Auth;
