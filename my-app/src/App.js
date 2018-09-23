import React, { Component } from 'react';
// import Wall from './componentes/Wall';
//import Auth from './componentes/Auth'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./componentes/Profile";
import  Friends from "./componentes/Friends";
import  Auth from "./componentes/Auth";
import  Wall from "./componentes/Wall";

class App extends Component {
  render() {
    return (
    //  <div>
    //    <Auth />
    //    {/* <Wall/> */}
    //  </div>
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={Auth} />
      <Route path="/Wall" component={Wall} />     
      <Route path="/Profile" component={Profile} />     
      <Route path="/Friends" component={Friends} /> 
    </div>          
  </Router>
    )
  };
};

export default App;