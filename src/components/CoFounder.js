import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const CoFounder = props => {    
    return (

        <Container>
            <div className="co-founder-module" > 
                <Row>
                    <Col md={12}>
                    <div className="co-founder-cards">
                        <div className="card">
                            <img src={props.hanaPicture} />
                            <div className="story-elements" id="odd-card">
                                <h2>CO -FOUNDER</h2>
                                <h1>Hana Qerimi</h1>
                                <h2>{props.hanaStory}</h2>
                            </div>
                            
                        </div>
                        <div className="card">
                            <img src={props.darsejPicture} />
                            <div className="story-elements" id="even-card">
                                <h2>CO -FOUNDER</h2>
                                <h1>Darsej Rizaj</h1>
                                <h2>{props.darsejStory}</h2>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default CoFounder