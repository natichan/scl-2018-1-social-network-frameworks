import React from 'react';
import {Icon, Col, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <Row>
        <Col s={12}>
          <div>
            <ul s={12}>
                  <li> 
                      <NavLink to="/">
                            <Icon>home</Icon>
                            <p className="textIcon">Wall</p>
                        </NavLink>
                    </li>    
                    <li>
                        <NavLink to="/profile">
                            <Icon>person</Icon>
                            <p className="textIcon">Profile</p>
                        </NavLink>
                    </li>
                   {/*  <li>  
                        <NavLink to="/friends">
                            <Icon>person_add</Icon>
                            <p className="textIcon">Friends</p>
                        </NavLink>
                    </li>  */}
                </ul>
          </div>
        </Col>
      </Row>
  )
}
export default Navigation;