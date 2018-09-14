import React, {Component} from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Img from '../componentesLogin/Img';


class NavbarC extends Component {
    render(){
        return (
            <Navbar brand='logo' right>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                <Img />
            </Navbar>
        )
    }
}

export default NavbarC;