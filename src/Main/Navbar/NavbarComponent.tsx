import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {verNum} from '../../constants';
import './styles.css';

interface IProps{
    CVlink: null|string
}

export const NavbarComponent = (props: IProps) => {
    return(
        <div>
            <Navbar className='justify-content-between' sticky="top" style={{backgroundColor: "#1A1A1D"}}>
                <Navbar.Brand><div style={{color:"#C3073F"}}>Amartya Mishra</div></Navbar.Brand>
                <NavDropdown alignRight id='menu-btn' title="Menu">
                    <NavDropdown.Item onClick={() => {if(props.CVlink) window.open(props.CVlink)}}>View Resume</NavDropdown.Item>
                    <NavDropdown.Divider style={{backgroundColor: '#00000030'}} />
                    <p className='ver-num px-4'>{verNum}</p>
                </NavDropdown>
            </Navbar>
        </div>
    )
}