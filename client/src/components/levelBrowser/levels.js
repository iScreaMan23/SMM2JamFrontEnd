import Table from 'react-bootstrap/Table'
import React from 'react';
import './levels.css';
import { useFetch } from './hooks.js';
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";



function Levels (props)  {
    const urls = props.value;

    const [levels, loading] = useFetch(
        "/api/"+urls+"Levels"
    );

    return (
        <>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={props.value}>{props.value} Levels</Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={props.value}>
                    <Card.Body>
                        <Table responsive striped >
                            <thead>
                            <tr>
                                <th>Creator</th>
                                <th>Level Title</th>
                                <th>Level ID</th>
                            </tr>
                            </thead>
                            {loading ? (
                                "Loading..."
                            ) : (
                                <tbody>
                                {levels.map(({title, course_id,userName}) => (
                                    <tr>
                                        <td>{userName}</td>
                                        <td>{title}</td>
                                        <td>{course_id}</td>
                                    </tr>
                                ))}
                                </tbody>
                            )}
                        </Table>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    );
}

export default Levels;