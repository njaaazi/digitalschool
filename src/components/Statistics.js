import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'


const Statistics = props => {    
    return (

        <Container>
            <div className="statistics-module" css ={{'@media (min-width: 600px)': {backgroundColor: `yellow`}}}> 
                    <div className="statistics">
                        <h1>{props.firstNumber}</h1>
                        <p>SUCCESS RATE</p>
                    </div>
                    <div className="statistics">
                        <h1>{props.secondNumber}</h1>
                        <p>CREATED APPS</p>
                    </div>
                    <div className="statistics">
                        <h1>{props.thirdNumber}</h1>
                        <p>SUCCESS RATE</p>
                    </div>
                    <div className="statistics">
                        <h1>{props.fourthNumber}</h1>
                        <p>STUDENTE TE REGJISTRUAR</p>
                    </div>
                    <div className="statistics" id="mobile-hidden">
                        <h1>{props.fifthNumber}</h1>
                        <p>SUCCESS RATE</p>
                    </div>
            </div>
        </Container>
    )
}

export default Statistics