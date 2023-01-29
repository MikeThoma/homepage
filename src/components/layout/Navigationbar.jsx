import './Navigationbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigationbar = () => {
    return <Navbar expand='sm'>
        <Navbar.Brand href='/' style={{ paddingLeft: '30px' }}>Mike Thoma</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls='navbarScroll' style={{ marginRight: '20px', border: 'none' }} />
        <Navbar.Collapse className='justify-content-end'>
            <Nav className="align-items-center" style={{ paddingRight: '30px' }}>
                <Nav.Link href='/experience'>Experience</Nav.Link>
                <Nav.Link href='/contact'><Button variant='outline-primary'>Contact Me</Button></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigationbar;