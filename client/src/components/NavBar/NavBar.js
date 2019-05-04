import React from 'react';
import { Navbar, Nav, NavItem , Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import './NavBar.css';

const NavBar =(props) => {
    return(
        <Navbar className='NavBar'>
            <Nav>
                <NavItem>
                    <Image src={'https://careportal.org/wp-content/uploads/2019/01/careportal-logo.png'} width={450} height={75}/>
                </NavItem>
            </Nav>
            <Nav>
                <Navbar.Text>Notifications</Navbar.Text>
            </Nav>
            <Nav>
                <Navbar.Text>Donation List</Navbar.Text>
            </Nav>
            <Nav>
                <Navbar.Text>Add a Donation Item</Navbar.Text>
            </Nav>
            <Nav>
                <NavItem onClick={props.onSignOut}>Log Out</NavItem>
            </Nav>
        </Navbar>
    );
};

NavBar.propTypes = {
    onSignOut: PropTypes.func.isRequired,
    showNavItems: PropTypes.bool.isRequired
};

export default NavBar;
