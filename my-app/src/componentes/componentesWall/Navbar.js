import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import LogoNavbar from './LogoNavbar';
import ImagenLogo from '../../assets/img/logotipoHorizontalBordeBlanco (1).png'


class NavbarC extends Component {
    render(){
        return (
            <div className="navbar" >
                <a href='' className="logo"><Icon>reorder</Icon></a>
                {/* <Img photo= {ImagenLogo}/> */}
                <LogoNavbar photo={ImagenLogo} />
            </div>
        )
    }
}

export default NavbarC;