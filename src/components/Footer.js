import React from "react"
import { Container } from 'react-bootstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Logo from '../images/Logo_Fin-Mono_B.png';
import FacebookLogo from '../images/facebook.png'
import InstagramLogo from '../images/instagram.png'
import TwitterLogo from '../images/twitter.png'
const Footer = (props) => (
    <StaticQuery query={graphql`
     {
      allWordpressWpApiMenusMenusItems
      (filter: {
        name: {
          eq: "Footer Menu"
        }
      }){
        edges{
          node{
            name
            items{
              title
              object_slug
            }
          }
        }
      }
    }

  `} render={props => (
            <Container>
              <div className="footer-part">
                <div className = "left-part">
                  <div className ="d-s-logo">
                    <img  id="ds_logo" src={Logo}/>
                    <h1>D/S</h1>
                  </div>
                  <div className="mapping">
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                          <div className="ml-auto" className="footer-elements" key={item.title}>
                              <Link to={`/${item.object_slug}`} key={item.title}>
                                  {item.title} <span id="show-mobile">&#x1f873;</span>
                              </Link>
                          </div>
                      ))}
                  </div>
                </div>

                <div className = "right-part">
                  <nav>
                    <ul className="social-networks">
                      <a href="https://www.facebook.com/shkolladigjitale/" target="_blank"><li><img src ={FacebookLogo} /></li></a>
                      <a href="https://www.instagram.com/shkolladigjitaleofficial/" target="_blank"><li><img src ={InstagramLogo} /></li></a>
                      <a href="https://twitter.com/ShkollaDigjital" target="_blank"><li><img src ={TwitterLogo} /></li></a>
                      <a href="" target="_blank"><li><img src ={TwitterLogo} /></li></a>
                    </ul>
                  </nav>
                </div>
                
              </div>
            </Container>
        )} />
)

export default Footer