import React, {useEffect, useState } from 'react';
import { Button, Form, FormGroup, FormLabel, Modal, ModalBody, Nav, Navbar, NavDropdown, Row, Spinner } from 'react-bootstrap';
import {loadReCaptcha, ReCaptcha} from 'react-recaptcha-v3';
import {reCAPTCHA_SITE_KEY} from '../../constants';
import axios from 'axios';
import _ from 'lodash';
import Swal from 'sweetalert2';
import './styles.css';

const initialState = {contactModal: false, success: false, buttonDisable: true};
interface IProps{
    CVlink: null|string
}

export const NavbarComponent = (props: IProps) => {
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
                    <p>All fields are mandatory.</p>
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
                            <Row className='align-items-center px-3'>
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
        <div>
            <Navbar className='justify-content-between' sticky="top" style={{backgroundColor: "#1A1A1D"}}>
                <Navbar.Brand><div style={{color:"#C3073F"}}>Amartya Mishra</div></Navbar.Brand>
                <NavDropdown alignRight id='menu-btn' title="Menu">
                    <NavDropdown.Item onClick={() => {if(props.CVlink) window.open(props.CVlink)}}>View Resume</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setControl({...control, contactModal: true})}>Send Message</NavDropdown.Item>
                    <NavDropdown.Divider style={{backgroundColor: '#00000030'}} />
                    <p className='ver-num px-4'>v0.1.9</p>
                </NavDropdown>
            </Navbar>
            {ContactModal()}
        </div>
    )
}