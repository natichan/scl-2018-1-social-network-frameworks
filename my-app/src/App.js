import React, { Component } from 'react';
import './App.css';
//import Login from './componentes/Login';
// import Register from './componentes/Register';
import Wall from './componentes/Wall';

class App extends Component {
  render() {
    return (
    <div>
        {/* <Register /> */}
        {/* <Login /> */}
        <Wall />
    </div>
    );
  }
}

export default App;
