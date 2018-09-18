import React, { Component } from 'react';
import Form from './componentsProfile/Form';
import Picture from './componentsProfile/Picture';
import ExamplePic from '../assets/img/foto-perfil.jpg'

class Profile extends Component {
    render() {
      return (
        <div>
            <Picture photo = {ExamplePic}/>
            <Form />
        </div> 
      );
    }
  }

export default Profile;