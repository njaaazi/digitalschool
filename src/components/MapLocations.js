import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const MapLocations = props => {    
    return (

        <Container>
            <div className="map-locations-module" >
                <Row>
                    <Col md={12}>
                    <div className="map-locations-card">
                        <div className="card">
                            <img src={props.mapImage} />
                            <div className="text-elements">
                                <h1>{props.title}</h1>
                                <h2>{props.paragraph}</h2>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default MapLocations