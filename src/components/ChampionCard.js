import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'

const ChampionCard = props => {
    return (
        <Container>
        <div className="champion-card-module">
            <div className="champion-cards">
                <div className="single-card" style = { {backgroundColor: props.backgroundColor }}>
                    <div className="mobile-image">
                        {props.backgroundColor}
                    </div>
                    <div className="single-card-elements">
                        <h2>{props.age}</h2>
                        <h1>{props.cardTitle}</h1>
                        <div className="program-features">
                            <div className ="feature-elements">
                                <img src={props.icon} />
                                <h2>{props.attribute}</h2>
                                <p>{props.response}</p>
                            </div>
                        </div>
                        <div className="card-links">
                            <a href={props.aplikoLink}><button className="btn">APLIKO</button></a>
                            <a href={props.meShumeLink}>ME SHUME</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    )
}

export default ChampionCard