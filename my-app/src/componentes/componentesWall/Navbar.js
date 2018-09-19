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
        <NavItem>

        <Link to={routes.WALL}>
            <Icon>home</Icon>
            <p className="textIcon">Wall</p>
        </Link>
        </NavItem>


           <NavItem>

        <Link to={routes.PROFILE}>
            <Icon>person</Icon>
            <p className="textIcon">Profile</p>
        </Link>
        </NavItem>

        <NavItem>

        <Link to={routes.FRIENDS}>

            
            <p className="textIcon">Friends</p>
            <Icon>person_add</Icon>
        </Link>
        </NavItem>


    <NavItem divider />
    <NavItem>

        <Link to={routes.LOGIN}>

            <Icon>keyboard_tab</Icon>
            <p className="textIcon">Log out</p>
        </Link>    
        </NavItem>

    </Navbar>
    )
}  

export default NavbarComponent;