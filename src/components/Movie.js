import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const Movie = props => {
    return (
        <Container>
            <div className="movie-module"> 
                <h1>{props.movie}</h1>
            </div>
        </Container>
    )
}
export default Movie