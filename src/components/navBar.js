

import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from '../images/Logo_Fin-Mono_B.png';

const newLocal = 
graphql`{
    allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Navigation Menu"}}) {
      edges {
        node {
          name
          items {
            title
            object_slug
        }
      }
    }
  }
}
  `
const CustomNavbar = (props) => (
    <StaticQuery className="static" query={newLocal} render={props => (
            <div className = "navbar-elements">
              <Link to={'/programet'}>
                        <img id="ds_logo" src={Logo}/>
                    </Link>
                <Navbar bg="transparent" expand="lg" >
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                            <Nav className="ml-auto" key={item.title}>
                                <Link to={`/${item.object_slug}`} key={item.title}>
                                    {item.title}
                                </Link>
                            </Nav>
                        ))}
                      <button>Apliko</button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )} />
)

export default CustomNavbar





