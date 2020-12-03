import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import './Scripts/Typewriter.js';
import './styles.css';
import { BeerComponent } from "./Subcomponents/BeerWide";

export const HeaderComponent = () => {

    return(
        <Jumbotron fluid style={{backgroundColor: "#1A1A1D"}}>
            <Row className="mx-0">
                <Col xs={12} md={9}>
                    <Row className="pl-5 pr-2">
                        <h1 style={{height:"5rem", color:"#C3073F"}}>
                            <div id='typewrite' data-period="2000" data-type='[ "Hi, Im Amartya.", "Im A Coder.", "I Am A Bodybuilder.", "I Like Solving Problems.","I Like Building Things."]'>
                                <span className="wrap"></span>
                            </div>
                        </h1>
                    </Row>
                    <Row className="pt-5 px-3 pl-5">
                        <p style={{color: "white", fontWeight:'lighter', fontSize:"1.3rem"}}>
                            Welcome to my portfolio. Scroll down to learn more about what I do.
                        </p>
                        <p style={{color: "white", fontWeight:'lighter', fontSize:"1.3rem"}}>
                            Don't forget to say hi or hesitate to shoot me a message if you have any questions.
                        </p>
                    </Row>
                    <BeerComponent/>
                </Col>
                <Col xs={12} md={3}>
                    <div className='image-wrapper'/>
                    <Row className='justify-content-center'>
                        <img className='header-image' src='https://media-exp1.licdn.com/dms/image/C5103AQFT0Iq52dzUtw/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=n9RgIyO4Vrl-40Iv-K0WQP9-tvHDwwLrbNe43SbqbQc' alt='profileimg'/>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
        
    )
}