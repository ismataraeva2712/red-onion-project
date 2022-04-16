import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo2 from '../../images/logo2.png'

import './Header.css'
const Header = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img style={{ height: '30px' }} className=' me-auto' src={logo2} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link className={"fw-bold "} as={Link} to="/home">
                                Home
                            </Nav.Link>
                            {user ? <button className='border-0' onClick={handleSignOut}>Sign Out</button> : <Nav.Link className={"fw-bold "} as={Link} to="/login">
                                Login
                            </Nav.Link>}
                            <Nav.Link className={"fw-bold "} as={Link} to="/signUp">Sign Up </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;