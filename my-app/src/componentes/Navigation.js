import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.LOGIN}>Login</Link></li>
      <li><Link to={routes.WALL}>Wall</Link></li>
      <li><Link to={routes.PROFILE}>PROFILE</Link></li>
      <li><Link to={routes.FRIENDS}>FRIENDS</Link></li>
    </ul>
  </div>

export default Navigation;