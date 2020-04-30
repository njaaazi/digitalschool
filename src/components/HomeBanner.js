import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'
const HomeBanner = props => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}</p>
                    <InputGroup className="mb-3">
                        <DropdownButton

                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-1"

                        >

                            <Dropdown.Item href="#">

                            </Dropdown.Item>

                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>
                </Col>
                <Col md={6}>Image</Col>
            </Row>
        </Container>

    )
}

export default HomeBanner