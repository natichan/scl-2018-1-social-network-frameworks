import React, { Component } from 'react';
import Wall from './componentes/Wall';
import Auth from './componentes/Auth'

class App extends Component {
  render() {
    return (
     <div>
       <Auth />
       {/* <Wall/> */}
     </div>
    )
  };
};

export default App;