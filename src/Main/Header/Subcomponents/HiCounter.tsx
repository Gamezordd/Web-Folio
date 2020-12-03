import { watch } from 'fs';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import firebase from '../../../Firebase/firebase';

interface IProps{
    class?: string
}

export const HitCounter = (props: IProps) =>{
    const [isLoading, setLoading] = useState(true);
    const [hits, setHits] = useState(0);
    let watcher;

    
    useEffect(() => {
        watcher = firebase.attachHitsWatcher();
        watcher.on('value', ss => {
            console.log("we");
            
            setHits(ss.val());
            setLoading(false);
        });
    })

    if(isLoading){
        return(
            <div className={props.class}>
                <Spinner variant='light' animation='grow'/>
            </div>
        )
    }

    return(
        <div className={props.class}>{hits}</div>
    )
}