import React, { useState } from 'react';
import { Button, Form, FormGroup, FormLabel, Modal, ModalBody, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './styles.css';

export const NavbarComponent = (props: any) => {
    const [control, setControl] = useState({contactModal: false});

    const ContactModal = () => {
        return(
            <Modal show={control.contactModal} onHide={() => {setControl({...control, contactModal: false})}} >
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <FormLabel>Email<span color='red'>*</span></FormLabel>
                            <Form.Control type='email' placeholder='Where to get back'/>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Message: </FormLabel>
                            <Form.Control as="textarea" rows={8}/>
                        </FormGroup> 
                        <FormGroup>
                            <Button style={{backgroundColor: '#4E4E50', borderColor:'#4E4E50' }}>Send</Button>
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
                    <NavDropdown.Item onClick={() => {window.open('https://1drv.ms/b/s!Akkr1QYilOQMicl_cFCz16x1wC_Gdg?e=Vd4cOc')}}>View Resume</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setControl({...control, contactModal: true})}>Say Something</NavDropdown.Item>
                    <NavDropdown.Divider style={{backgroundColor: '#00000030'}} />
                    <NavDropdown.Item className='ver-num'><p>v0.1.1</p></NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            {ContactModal()}
        </div>
    )
}