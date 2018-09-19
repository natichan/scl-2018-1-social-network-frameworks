import React from 'react';
import {  BrowserRouter as Router, Route,} from 'react-router-dom';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Wall from './componentes/Wall';
import Profile from './componentes/Profile';
import Friends from './componentes/Friends';
import Navigation from './componentes/Navigation'
import * as routes from './constants/routes';

const App = () =>
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route
        exact path={routes.WALL}
        component={Wall}
      />
      <Route
        exact path={routes.REGISTER}
        component={Register}
      />
      <Route
        exact path={routes.LOGIN}
        component={Login}
      />
      <Route
        exact path={routes.PROFILE}
        component={Profile}
      />
      <Route
        exact path={routes.FRIENDS}
        component={Friends}
      />
    </div>
  </Router>

export default App;