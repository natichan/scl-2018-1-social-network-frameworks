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
        // console.log('click');
        window.location = 'https://natichan.github.io/scl-2018-1-social-network-frameworks/';
        
    }
    
    render() {
        return (
            <Navbar brand={<LogoNavbar photo = {ImageLogo} />} className="navbar" right >   
                <NavItem href={process.env.PUBLIC_URL + '/Wall'}><span className="textIcon">Wall</span><Icon>home</Icon></NavItem>
                <NavItem href={process.env.PUBLIC_URL + '/Profile'}><span className="textIcon">Profile</span><Icon>person</Icon></NavItem>
                <NavItem href={process.env.PUBLIC_URL + '/Friends'}><span className="textIcon">Friends</span><Icon>person_add</Icon></NavItem>
                <NavItem onClick={this.logout} ><span className="textIcon">Log out</span><Icon>keyboard_tab</Icon></NavItem>       
            </Navbar>
        )
    }
}  

export default NavbarComponent;