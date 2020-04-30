import React from 'react';
import '../styles/style.scss'
import Logo from '../images/Logo_Fin-Mono_B.png'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const ContactModule = props => {    
    return (

        <Container>
            <div className="contact-module" > 
                <div className="contact-elements">
                    <div className ="contact-info">
                        <h1 id="title">Na kontaktoni</h1>
                        <div className="contact-form">
                            <h2>NA LEJONI TE JU NDIHMOJME</h2>
                            <form action ="" method="post" accept-charset="ISO-8859-1">
                                <div className="apo">
                                    <div className="bpo">
                                        <select id = "number-select">
                                            <option value='044'>044</option>
                                            <option value="049">049</option>
                                        </select>
                                    </div>
                                    <div className="cpo">
                                        <input id="input-number" type="text" name ="number"></input>
                                    </div>
                                </div>
                                <div className="send-button">
                                    <input id="submit-button" type="submit" value="DERGO &#10140;" ></input>
                                </div>
                            </form>
                        </div>

                        <div className = "single-element">
                            <h1>Prishtina</h1>
                            <p>Filip Shiroka nr. 23 A, Ulpianë</p>
                            <p>Prishtine, 10000</p>
                            <p>Kosove</p>
                            <p id = "underlined">{props.email}</p>
                            
                        </div>
                        <div className = "single-element">
                            <h1>Work with us</h1>
                            <p id = "underlined">{props.email}</p>
                        </div>
                        <div className = "single-element">
                            <h1>Apply</h1>
                            <p>Fill the form</p>
                        </div>
                        <div className = "single-element" id="social-networks">
                            <h1>Social</h1> 
                            <a id = "underlined" href="https://twitter.com/ShkollaDigjital" target="_blank"><p>Twitter: </p></a>
                            <a id = "underlined" href="https://www.instagram.com/shkolladigjitaleofficial/" target="_blank"><p>Instagram: </p></a>
                            <a id = "underlined" href="https://www.facebook.com/shkolladigjitale/" target="_blank"><p>Facebook: </p></a>
                        </div>
                        
                    </div>
                    <div className="digitalschool-logo">
                        <img src={Logo} rel="digital-school" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactModule