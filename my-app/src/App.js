import React, { Component } from 'react';
import './App.css';
import Login from './componentes/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Register />
        <Wall />
      </div>
    );
  }
}

export default App;
