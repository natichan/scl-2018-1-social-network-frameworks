import React, {Component} from 'react';
import './profile.css';
import {Row, Col} from 'react-materialize';
import fire from '../../config/firebase';
import deff from './../../assets/img/images (2).jpeg';
import './profile.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        photo: '',
        email: '',
    };
}

componentDidMount() {
    return fire.auth().onAuthStateChanged((user) => {
      // console.log(user); 
        this.setState({
            name: user.displayName,
            photo: user.photoURL,
            email: user.email
        });
    });          
}
    render() {
        return (
          <div className="back">
            <header>
              <Row className="center">
                <Col s={12}>
                <img className="picture" src={this.state.photo ? this.state.photo : deff} alt="user" value={this.state.photo}></img>
                </Col>
              </Row>
            </header>
            <main>
              <Row className="center">
                <Col s={12}>
                <h1>{this.state.name ? this.state.name : this.state.email}</h1>
                </Col>
              </Row>
            </main>
          </div>
        )
    }
}

export default Form;