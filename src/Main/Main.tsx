import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Experience from './Experience';
import Footer from './Footer';

export const Main = (props: any) => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <Experience/>
            <Footer/>
        </div>
        
    );
}