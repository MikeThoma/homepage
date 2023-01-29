import './Navigationbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from "react-router-dom";


const Navigationbar = () => {
    return <Navbar expand='sm'>
        <Navbar.Brand style={{ paddingLeft: '30px' }}><Link to='/' style={{ paddingLeft: '30px', textDecoration: 'none', color: 'black' }}>Mike Thoma</Link></Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls='navbarScroll' style={{ marginRight: '20px', border: 'none' }} />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="align-items-center" style={{ paddingRight: '30px' }}>
                <Link to='experience' style={{ textDecoration: 'none', color: 'black', marginRight: "10px"}}>Experience</Link>
                <Link to='contact' style={{ textDecoration: 'none', color: 'black' }}><Button variant='outline-primary'>Contact Me</Button></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigationbar;