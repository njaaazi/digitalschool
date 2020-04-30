import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const Bannermodule = props => {
    let tel = '';
    
    return (

        <Container>
            <div className="home-banner-module" style={{ backgroundImage:`url(${props.bannerImage})`}} > 
                <Row>
                    <Col md={12}>
                    <h1>{props.bannerTitle}</h1>

                    <div className="contact-part">
                    <h2>{props.contactMessage}</h2>
                        <div className = "contact-elements" >
                            <select id = "number-select">
                                <option value='ipko'>044</option>
                                <option value="vala">049</option>
                            </select>
                            <input value = {props.telephone} ></input>
                            <button id="application-button">{props.buttonText}</button>
                        </div>
                    </div>
                    <div className="mobile-img">
                        <img src={props.bannerImage}/>
                    </div>                   

                    <div className = "student-information-div"  >
                        <div className = "student-information" style={{ backgroundImage:`url(${props.studentBacground})`}}>
                            <div className="student-information-details">
                                <h2>{props.name}</h2>
                                <h2>{props.age}</h2>
                            </div>
                        </div>
                    </div>
                    
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Bannermodule