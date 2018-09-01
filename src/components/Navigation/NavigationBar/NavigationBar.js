import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import './NavigationBar.css';
import Logo from '../../Logo/Logo';

const navigationBar = (props) => (
    <Navbar fixedTop>
        <Navbar.Header >
            <Navbar.Brand>
                <a href="/">Build-a-Burger</a>
            </Navbar.Brand>
            <Navbar.Toggle>
                <Logo />
            </Navbar.Toggle>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    STORES
                </NavItem>
                <NavItem eventKey={2} href="#">
                    CHECKOUT
                </NavItem>
                <NavItem eventKey={3} href="#">
                    ABOUT
                </NavItem>
            </Nav>
        </Navbar.Collapse> 
    </Navbar>
);

export default navigationBar;