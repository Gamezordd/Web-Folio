import React from 'react';
import ValBtn from '../ValButton';
import {IoIosBeer} from 'react-icons/io';
import { Col, Row } from 'react-bootstrap';
import {HitCounter} from './HiCounter';
import './styles.css';

export const BeerComponent = () => {

    if(window.innerWidth < 800){
        return(
            <Col>
                <Row className='justify-content-center align-items-center'>
                    <ValBtn text='say hi!'/>
                </Row>
                <Row className='justify-content-center '>
                    <IoIosBeer color='white' size={40}/>
                    <HitCounter class='hi-counter'/>
                </Row>
            </Col>
        )
    }
    else{
        return(
            <Row style={{paddingLeft: '3rem'}} className='align-items-center'>
                <ValBtn text='say hi!'/>
                <HitCounter class='hi-counter' />
                <IoIosBeer className='hi-icon' color='white' size={40}/>
            </Row>
        )
    }
}