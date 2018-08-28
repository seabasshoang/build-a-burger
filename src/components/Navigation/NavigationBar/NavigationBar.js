import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavigationBar.css';

const navigationBar = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Build-a-Burger</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    CONTACT
                </NavItem>
                <NavItem eventKey={2} href="#">
                    CHECKOUT
                </NavItem>
            </Nav>
        </Navbar.Collapse> 
    </Navbar>
);

export default navigationBar;