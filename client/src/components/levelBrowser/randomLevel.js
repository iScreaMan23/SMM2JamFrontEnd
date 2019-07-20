import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'



function RandomLevel () {
    const levelTypes = ["Auto","Kaizo","Multi","Music","Puzzle","Speedrun","Standard","Troll","UnoMas"];
    return (
        <>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select a Level Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {levelTypes.map((levelType) =>
                        <Dropdown.Item>{levelType}</Dropdown.Item>
                    )}
                </Dropdown.Menu>

                <Button variant="primary">Find Level</Button>
            </Dropdown>
        </>
    );
}

export default RandomLevel;