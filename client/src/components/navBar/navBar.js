import React, { useState  } from 'react';
import Nav from 'react-bootstrap/Nav'



function NavBar ()  {
    return (
        <>
            <Nav
                activeKey="/home"
                onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link href="/home">SMM2 Level Jam</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Discord</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Level Browser
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default NavBar;
