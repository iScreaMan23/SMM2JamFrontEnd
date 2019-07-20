import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar ()  {
    return (
        <header>
            <Navbar variant="light" fixed="top" activeKey="/home" className="navbarstyle"
                    //onSelect={selectedKey => alert(`selected ${selectedKey}`)} eventKey="disabled" disabled
                >
                    <Nav.Item>
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to='/about'>About</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Discord" id="nav-dropdown" className="">
                            <NavDropdown.Item target="_blank" rel="noopener noreferrer" href='https://discord.gg/duAd4gZ'>SMM2 Level Jam</NavDropdown.Item>
                            <NavDropdown.Item target="_blank" rel="noopener noreferrer" href='https://discord.gg/HYeXx28'>'Official' SMM2</NavDropdown.Item>
                            <NavDropdown.Item target="_blank" rel="noopener noreferrer" href='https://discord.gg/skNMmDe'>SMM Showciety</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to='levelbrowser'>Level Browser</Link></Nav.Link>
                    </Nav.Item>
                </Navbar>
        </header>
    );
}

export default NavBar;
