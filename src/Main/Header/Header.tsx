import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import './Scripts/Typewriter.js';
import './styles.css';
import { BeerComponent } from "./Subcomponents/BeerWide";

export const HeaderComponent = () => {

    return(
        <Jumbotron fluid style={{backgroundColor: "#111112"}}>
            <Row className="mx-0">
                <Col xs={12} md={9}>
                    <Row className={`${window.innerWidth > 801 ? 'pl-5 pr-2' : ''}`}>
                        <h1 style={{height:"5.4rem", color:"#C3073F"}}>
                            <div id='typewrite' data-period="2000" data-type='[ "Hi, I Am Amartya.", "I Am A Software Developer.", "I Am A Fitness Enthusiast.", "I Like Solving Problems.","I Like Building Things."]'>
                                <span className="wrap"></span>
                            </div>
                        </h1>
                    </Row>
                    <Row className={`pt-2 ${window.innerWidth > 801 ? 'px-3 pl-5' : ''}`}>
                        <p style={{color: "white", fontWeight:'lighter', fontSize:"1.3rem"}}>
                            Hi, scroll down to learn more about what I do or shoot me a message using the option in the menu.
                        </p>
                        <p style={{color: "white", fontWeight:'lighter', fontSize:"1.3rem", paddingTop:"1rem", paddingBottom:'1rem'}}>
                            I am a Software Developer with love for all of technology primarily experienced in MERN Stack development.
                            However, I have expanded my skillset over the years to include various other databases, frameworks and libraries.
                        </p>
                    </Row>
                    <BeerComponent/>
                </Col>
                <Col xs={12} md={3}>
                    <div className='image-wrapper'/>
                    <Row style={{height: '100%'}} className='justify-content-center align-items-center'>
                        <img className='header-image' src='https://media-exp1.licdn.com/dms/image/C5103AQFT0Iq52dzUtw/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=n9RgIyO4Vrl-40Iv-K0WQP9-tvHDwwLrbNe43SbqbQc' alt='profileimg'/>
                    </Row>
                    <div className='image-wrapper'/>
                </Col>
            </Row>
        </Jumbotron>
        
    )
}