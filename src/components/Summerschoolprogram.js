import React from 'react';
import '../styles/style.scss'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'


const rpt = 
graphql`{
    wpgraphql {
        pages {
          edges {
            node {
              moduleList {
                modulesList {
                  ... on WPGraphQL_Page_Modulelist_ModulesList_Summerschoolprogram {
                    elements {
                      text
                    }
                  }
                }
              }
            }
          }
        }
    }     
}
  `


const Summerschoolprogram = props => {    
    return (

        <Container>
            <div className="summerschoolprogram-module" >
                <div className = "sumemer-school-elements">
                    <div className = "about-summer-school">
                        <h2>
                            {props.aboutProgram}
                        </h2>
                    </div>
                    <div className = "program">
                        <a href="http://localhost:8000/filma"><h1 className="prog-one"  id="prog-mobile">{props.sectionOne}</h1> <span>&#10132;</span></a>
                        <a><h1 className="prog-two"  id="prog-mobile">{props.sectionTwo}</h1> <span>&#10132;</span></a>
                        <a><h1 className="prog-three" id="prog-mobile">{props.sectionThree}</h1> <span>&#10132;</span></a>
                        <a><h1 className="prog-four" id="prog-mobile">{props.sectionFour}</h1> <span>&#10132;</span></a>
                        <a><h1 className="prog-five" id="prog-mobile">{props.sectionFive}</h1> <span>&#10132;</span></a>
                    </div>
                </div>
            {/* <StaticQuery query={rpt} render ={props =>(
                <div>
                    {props.wpgraphql.pages.edges[0].node.moduleList.modulesList[0].elements.map(item => (
                                <div key={item.text}>
                                    {item.text}
                                    {item}
                                </div>
                        ))}
                </div>
            )} /> */}
            </div>
        </Container>
    )
}

export default Summerschoolprogram