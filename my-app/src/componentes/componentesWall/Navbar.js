import React, {Component} from 'react';
import {Navbar,NavItem, Icon} from 'react-materialize';
import LogoNavbar from './LogoNavbar';
import ImageLogo from '../../assets/img/logotipoHorizontalBordeBlanco (1).png'
import './wall.css'

class NavbarC extends Component {
    render(){
        return (
            <Navbar brand={<LogoNavbar photo = {ImageLogo} />} className="navbar" right>
            <NavItem onClick={() => console.log("test click")} ><Icon>home</Icon><p className="textIcon">Wall</p></NavItem>
            <NavItem onClick={() => console.log("test click")} ><Icon>person</Icon><p className="textIcon">Profile</p></NavItem>
            <NavItem onClick={() => console.log("test click")}  ><Icon>person_add</Icon><p className="textIcon">Friends</p></NavItem>
            <NavItem onClick={() => console.log("test click")}  ><Icon>keyboard_tab</Icon><p className="textIcon">Log out</p></NavItem>
            </Navbar>
        )
    }
}

export default NavbarC;