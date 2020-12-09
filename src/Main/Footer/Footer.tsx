import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import {RiCopyrightLine, FaGithubSquare} from 'react-icons/all';
import './styles.css';

export const FooterComponent = () => {

    return(
        <Jumbotron fluid style={{backgroundColor:'#1A1A1D'}}>
            <Row className='justify-content-center mx-0'>
                <Col xs={12} lg={4}>
                    <Row className='justify-content-center align-items-center pt-3'>
                        <FontAwesomeIcon onClick={() => {window.open('https://www.linkedin.com/in/amartya-mishra/')}} style={{color:"#0072b1"}} className='fa-2x' icon={faLinkedin} />
                        &nbsp;&nbsp;&nbsp;
                        <FaGithubSquare color="white" size={31} onClick={() => {window.open('https://github.com/Gamezordd/')}} />
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon onClick={() => {window.open('https://www.instagram.com/mr.mishraa/')}} style={{color:"#FFFFFF"}} className='fa-2x' icon={faInstagram} />
                    </Row>
                </Col>
                <Col xs={12} lg={8}>
                    <Row className='justify-content-center align-items-center pt-3'>
                        <RiCopyrightLine style={{color:'#ffffff70'}} size={18} />&nbsp;
                        <span style={{color: '#ffffff70', fontSize:'1rem'}}>Amartya Mishra</span>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
    )
}