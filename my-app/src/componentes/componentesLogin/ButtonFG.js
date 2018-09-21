import React, { Component } from 'react';
import {Button} from 'react-materialize';
import './Login.css';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


class ButtonsFaceGoo extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  render() {
    return (
      <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}
    />  
    );
  }
}

export default ButtonsFaceGoo;



