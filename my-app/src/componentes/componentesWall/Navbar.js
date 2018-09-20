import React from 'react';
import {Navbar,NavItem, Icon} from 'react-materialize';
import LogoNavbar from './LogoNavbar';
import ImageLogo from '../../assets/img/logotipoHorizontalBordeBlanco (1).png'
import './wall.css'
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const NavbarComponent = () => {
    return (
    <Navbar brand={<LogoNavbar photo = {ImageLogo} />} className="navbar" right>   
        <ul>
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
    </Navbar>
    )
}  

export default NavbarComponent;