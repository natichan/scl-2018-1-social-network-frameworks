import React, { Component } from 'react';
//import Wall from './componentes/Wall';
import Auth from './componentes/Auth'
import Profile from './componentes/Profile'
class App extends Component {
  render() {
    return (
     <div>
       {/* <Auth /> */}
       {/* <Wall/> */}
       <Profile />
     </div>
    )
  };
};

export default App;