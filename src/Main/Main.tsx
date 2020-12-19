import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Experience from './Experience';
import Footer from './Footer';
import firebase from '../Firebase';

export const Main = (props: any) => {
    const[CVlink,setCV] = useState<null | string>(null);

    const getCV = async () => {
        const res = await firebase.fetchCV();
        setCV(res.val());
    }

    const updateUserCount = async () => {
        await firebase.incrementUserCount();
    }

    useEffect(() => {
        getCV();
        updateUserCount();
    },[]);
    
    return(
        <div>
            <Navbar CVlink={CVlink}/>
            <Header/>
            <Experience CVlink={CVlink} />
            <Footer/>
        </div>
        
    );
}