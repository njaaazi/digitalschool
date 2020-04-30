import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const AboutCinema = props => {
    return (
        <Container>
            <div className="about-cinema-module"> 
                <div className="text-info">
                <h1>{props.title}</h1>
                    <div className="side-texts">
                        <h2>{props.rightSideText}</h2>
                        <h2>{props.leftSideText}</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default AboutCinema