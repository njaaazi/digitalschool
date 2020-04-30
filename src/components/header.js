
import { Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import React from "react"
import NavBar from './navBar'

const Header = ({ siteTitle }) => (

    <Container>
        <NavBar />
    </Container>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
