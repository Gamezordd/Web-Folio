import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {BiMessageSquareDots} from 'react-icons/all';
import Swal from 'sweetalert2';
import {loadReCaptcha, ReCaptcha} from 'react-recaptcha-v3';
import {reCAPTCHA_SITE_KEY} from '../constants';
import axios from 'axios';
import {Spinner, Button, Form, FormGroup, FormLabel, Modal, ModalBody} from 'react-bootstrap';
import _ from 'lodash';

import './styles.css';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
const initialState = {contactModal: false, success: false, buttonDisable: true};

export const Contact = () => {
    const [control, setControl] = useState(initialState);
    const [formError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    let recaptcha: null | ReCaptcha;

    useEffect(() => {
        loadReCaptcha(reCAPTCHA_SITE_KEY);
    }, []);

    const ContactModal = () => {
        const isFilled = () => {
            //@ts-ignore
            const a = document.getElementById('contact')?.value;
            //@ts-ignore
            const b = document.getElementById('subject')?.value;
            //@ts-ignore
            const c = document.getElementById('messageBody')?.value;
            if(a === '' || b === '' || c === '') {
                return false;
            }
            else{
                return true;
            }
        }

        const updateToken = () => {
            if(isFilled()){
                setError(false)
            }
            else{
                setError(true);
                return;
            }
            if(!recaptcha) return;
            setLoading(true);
            recaptcha.execute();
            return;
        }

        const handleCaptcha = async (token : string | null) => {
            try {
                if(!isFilled() || !token) return;
                // console.log(token);
                    //@ts-ignore
                const a = document.getElementById('contact')?.value;
                //@ts-ignore
                const b = document.getElementById('subject')?.value;
                //@ts-ignore
                const c = document.getElementById('messageBody')?.value;
                const res = await axios.post('https://us-central1-web-folio-d329b.cloudfunctions.net/verify_reCAPTCHA',{token: token, contact: a, subject: b, message: c});
                // console.log("stat: ", res.status);
                
                if(res.data.success){
                    setControl({...control, contactModal: false});
                    Swal.fire(
                        'Message Sent',
                        'Thank you for getting in touch, I will get back ASAP.',
                        'success'
                    );
                }
                else{
                    throw new Error('Invalid Response from Google.')
                }
                setLoading(false);
                return;
            } catch (err) {
                console.error(err);
                // console.log(res.data);
                setLoading(false);
                Swal.fire(
                    'Error',
                    "That's unusual, please try again.",
                    'error'
                )
            }
        }

        const renderMessage = () => {
            if(!formError){
                return(
                    <p>All fields are mandatory. {window.innerWidth > 801 ? '' : 'Secured by ReCAPTCHA.'}</p>
                )
            }
            else if(!isLoading){
                return(
                    <p color='danger'>An error has occured. Did you fill all the fields?</p>
                );
            }
            else{
                return null;
            }
        }

        const handleButtonEnable = () => {
            if(!isFilled()){
                setControl({...control, buttonDisable: true});
            }
            else{
                setControl({...control, buttonDisable: false});
            }
        }

        const debouncedButtonHandler = _.debounce(() => handleButtonEnable(), 1000);

        return(
            <Modal show={control.contactModal} onHide={() => {setControl(initialState)}}>
                <ModalHeader className='pl-3 pt-2 pb-0'><h5>Get In Touch</h5></ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <FormLabel>Email Address / Phone Number<span color='red'>*</span></FormLabel>
                            <Form.Control onChange={() => debouncedButtonHandler()} id='contact' type='email' placeholder='Where to get back'/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Subject</FormLabel>
                            <Form.Control onChange={() => debouncedButtonHandler()} id='subject' placeholder='What is this about?'/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Message: </FormLabel>
                            <Form.Control onChange={() => debouncedButtonHandler()} id='messageBody' as="textarea" rows={8}/>
                        </FormGroup> 
                        <FormGroup>
                            <ReCaptcha
                                sitekey= {reCAPTCHA_SITE_KEY}
                                action='Message'
                                verifyCallback={(res) => handleCaptcha(res)}
                                ref={ref => recaptcha = ref}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel> {renderMessage()} </FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <Row className='align-items-center justify-content-start px-3'>
                                <Button disabled={control.buttonDisable} onClick={() => updateToken()} className='okbtn2'>Send</Button>
                                <a onClick={() => setControl({...control, contactModal: false})} href='#' className='mr-3'>Cancel</a>
                                {isLoading ? <Spinner style={{color: '#C3073F'}} animation='border'/> : null}
                            </Row>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }

    return(
        <Fragment>
            <div  className='rect-big'>
                <Row style={{height: "100%"}} className='align-items-center mx-0 px-1'>
                    <Col xs='5'>
                        <Row style={{height: "100%"}} className='justify-content-center align-items-center'>
                            <BiMessageSquareDots className='cont-icn' size={40}/>
                        </Row>
                    </Col>
                    <Col xs='7'>
                        <Row onClick={() => setControl({...control, contactModal: true})} style={{height: "100%"}} className='cont-text'>
                            Email Me!
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                
            </div>
            {ContactModal()}
        </Fragment>
        
    )
}