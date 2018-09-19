import React, { Component } from 'react';
import './App.css';
//import Login from './componentes/Login';
// import Register from './componentes/Register';
import Wall from './componentes/Wall';
//import Post from './componentes/componentesWall/Post';

class App extends Component {
  render() {
    return (
    <div>
        {/* <Register /> */}
        {/* <Login /> */}
        <Wall /> 
        {/* <Post/> */}
    </div>
    );
  }
}

export default App;
