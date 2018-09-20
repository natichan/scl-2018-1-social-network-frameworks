import React from 'react';
import {Icon, Col, Row} from 'react-materialize';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () => {
    return (
      <Row>
        <Col s={12}>
  <div>
     <ul s={12}>
           <li> 
               <Link to={routes.WALL}>
                    <Icon>home</Icon>
                    <p className="textIcon">Wall</p>
                </Link>
            </li>    
            <li>
                <Link to={routes.PROFILE}>
                    <Icon>person</Icon>
                    <p className="textIcon">Profile</p>
                </Link>
            </li>
            <li>  
                <Link to={routes.FRIENDS}>
                    <Icon>person_add</Icon>
                    <p className="textIcon">Friends</p>
                </Link>
            </li>
            <li>  
                <Link to={routes.LOGIN}>
                    <Icon>keyboard_tab</Icon>
                    <p className="textIcon">Log out</p>
                </Link>
            </li>    
        </ul>
  </div>
  </Col>
  </Row>
  )
}
export default Navigation;