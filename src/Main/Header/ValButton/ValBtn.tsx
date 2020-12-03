import React, { useEffect, useState } from 'react';
import './styles.scss';
import Firebase from '../../../Firebase/firebase';

interface IProps{
    text: string;
}

export const Btn = (props: IProps) => {
    const [waved, setWaved] = useState(false);
    const hiaction = () =>{
        //wave action updates database
        Firebase.hiAction();
        localStorage.setItem('waved',"1");
        const now = new Date().getTime();
        localStorage.setItem('timeofwave', now.toString());
        setWaved(true);
    }

    useEffect(() => {
        //reset wave after 24 hours
        const now = new Date().getTime();
        const then = localStorage.getItem('timeofwave');

        if(then && now - parseInt(then) > 24 * 60 * 60 * 1000){
            localStorage.setItem("waved","0");
        }
        const wavcurr = localStorage.getItem("waved");
        if(wavcurr === '1'){
            setWaved(true);
        }
    })

    if(waved){
        
        return(
            <div className='conf-text'>Cheers!</div>
        )
    }
    else{
        return(
            <div onClick={(e) => {e.preventDefault(); hiaction();}} className='btn-container'>
                <a href="#" className='transparent cont-2'>
                    <p className='the-p'><span className="bgbg"></span><span className="base"></span><span className="text">{props.text}</span></p>
                </a>
            </div>
        )
    }
    
}