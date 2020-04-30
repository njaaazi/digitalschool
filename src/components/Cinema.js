import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const Cinema = props => {    
    return (

        <Container>
            <div className="cinema-module" > 
                <Row>
                    <Col md={12}>
                    <div className="cinema-cards">
                        <div className="card">
                            <img src={props.cinemaImg} alt={props.cinemaImgAlt} />
                            <div className="about">
                                <h2>{props.aboutCinema}</h2>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Cinema