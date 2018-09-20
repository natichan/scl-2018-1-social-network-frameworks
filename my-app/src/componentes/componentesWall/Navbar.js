import React, {Component} from 'react';
import {Navbar,NavItem, Icon} from 'react-materialize';
import LogoNavbar from './LogoNavbar';
import ImageLogo from '../../assets/img/logotipoHorizontalBordeBlanco (1).png'
import './wall.css'
import fire from '../../config/firebase';


class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }
    
    render() {
        return (
            <Navbar brand={<LogoNavbar photo = {ImageLogo} />} className="navbar" right>   
                <NavItem >
                    <Icon>home</Icon>
                    <p className="textIcon">Wall</p>
                </NavItem>
            
                <NavItem >
                    <Icon>person</Icon>
                    <p className="textIcon">Profile</p>
                </NavItem>

                <NavItem >
                    <Icon>person_add</Icon>
                    <p className="textIcon">Friends</p>
                </NavItem>

                <NavItem onClick={this.logout} >
                    <Icon>keyboard_tab</Icon>
                    <p className="textIcon">Log out</p>
                </NavItem>
            </Navbar>
        )
    }
}  

export default NavbarComponent;