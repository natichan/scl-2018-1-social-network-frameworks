import React, {Component} from 'react';
import './profile.css';
import {Container, Row, Col} from 'react-materialize';
import fire from '../../config/firebase';
import deff from './../../assets/img/default.png';
import './profile.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        photo: '',
    };
}

componentDidMount() {
    return fire.auth().onAuthStateChanged((user) => {
      // console.log(user); 
        this.setState({
            name: user.displayName,
            photo: user.photoURL,
        });
    });          
}
    render() {
        return (
          <div>
          <header>
            <Row className="center">
              <Col s={12}>
              <img className="picture" src={this.state.photo === ""? deff: this.state.photo} alt="user" value={this.state.photo}></img>
              </Col>
            </Row>
            </header>
            <Row className="center">
              <Col s={12}>
              <h1>{this.state.name}</h1>
              </Col>
            </Row>
          </div>
        )
    }
}

export default Form;