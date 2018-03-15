import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap'
class UINavbar extends Component {
    constructor(props){
        super(props);
    }

    //--------- Method Event--------------

    onLogin = () => {
        // this.props.history.push('/login');
        location.replace('/login');
    }

    onRegister = () => {
        // this.props.history.push('/register');
        location.replace('/register');
    }

    //------------------------------------

    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem onClick={this.onLogin}  eventKey={1} >
                        Login
                    </NavItem>
                    <NavItem onClick={this.onRegister} eventKey={2} >
                        Register
                    </NavItem>
                </Nav>
            </Navbar>   
        );
    }
}

export default UINavbar;