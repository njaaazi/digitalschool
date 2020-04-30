import React from 'react';
import '../styles/style.scss'
import { Container, Row, Col, InputGroup, DropdownButton, Dropdown, FormControl } from 'react-bootstrap'



const BannerBelow = props => {
    return (
        

        <Container>
            {/* {props.contactFormShortcode} */}
            <div className="below-banner-module" style={{ backgroundImage:`url(${props.background})`}} > 
                <Row>
                    <Col md={12}>
                    <div className="banner-elements">
                        <div className="banner-moto"  style={{color: props.textColor }}>
                             <h1>{props.moto}</h1>
                        </div>
                        <div className = "contact-elements">
                            <h2 id ="mobile-hidden" style={{color: props.textColor }}>{props.contactParagraph}</h2>
                            <h2 id ="desktop-hidden">{props.contactParagraphMobile}</h2>
                            <div className = "contact-us" >
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
                        </div>
                    </div>                 
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default BannerBelow