import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import firebase from '../../Firebase/firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

export const Exp = () => {
    const [exp, setExp] = useState<any>(undefined);
    const [edu, setEdu] = useState<any>(undefined);
    const [isLoading, setLoading] = useState(true);

    const getDetails = async () => {
        let res = await firebase.fetchExp();
        setExp(res.val());
        res = await firebase.fetchEdu();
        setEdu(res.val());
        setLoading(false);
        return;
    }

    useEffect(() => {
        getDetails();
    }, []);

    const populateExp = () => {
        return(
            Object.keys(exp).map((e: string) => {
                
                return(
                    <VerticalTimelineElement
                        key={e}
                        contentStyle={{ background: `${exp[e].color}`, color: `${exp[e].fontColor}`}}
                        contentArrowStyle={{ borderRight: `7px solid  ${exp[e].color}` }}
                        date={exp[e].date}
                        iconStyle={{ background: `${exp[e].color}`, color: `${exp[e].fontColor}`}}
                        iconClassName='timeline-icon-exp'
                        icon={<FontAwesomeIcon className='timeline-icon-fine-exp' icon={faBriefcase}/>}
                        onTimelineElementClick={() => {if(exp[e]?.link) {window.open(`${exp[e].link}`)}}}
                    >
                        {exp[e]?.link ? <u><h6>{e}</h6></u> : <h6>{e}</h6>}
                        <p style={{fontSize: '0.8rem'}}>
                            {exp[e].description}
                        </p>
                    </VerticalTimelineElement>
                )
            })
        )
    }

    const populateEdu = () => {
        return(
            Object.keys(edu).map((e: string) => {
                return(
                    <VerticalTimelineElement
                        key={e}
                        contentStyle={{ background: `${edu[e].color}`, color: `${edu[e].fontColor}`}}
                        contentArrowStyle={{ borderLeft: `7px solid  ${edu[e].color}` }}
                        date={edu[e].date}
                        iconStyle={{ background: `${edu[e].color}`, color: `${edu[e].fontColor}`}}
                        iconClassName='timeline-icon-pro'
                        icon={<FontAwesomeIcon className='timeline-icon-fine-pro' icon={faBriefcase}/>}
                        onTimelineElementClick={() => {if(edu[e]?.link) {window.open(`${edu[e].link}`)}}}
                    >
                        {edu[e]?.link ? <u><h6>{e}</h6></u> : <h6>{e}</h6>}
                        
                        <p style={{fontSize: '0.8rem'}}>
                            {edu[e].description}
                        </p>
                    </VerticalTimelineElement>
                )
            })
        )
    }

    if(isLoading){
        return(
            <Row style={{height:'20rem'}} className='justify-content-center align-items-center'>
                <p className='pf-loading-text'>Loading</p> <Spinner animation="grow" variant="light"/>
            </Row>
        )
    }
    else if(!exp){
        return(
            <Row className='justify-content-center mx-0 px-2'>
                <h4 style={{color: "#950740", fontWeight: 'lighter', fontSize:'15px', textAlign:'center'}}>
                    Hmm... Looks like there was an error fetching this section. Please try reloading the page.
                </h4>
            </Row>
        )
    }

    return (
        <Row className='justify-content-around mx-0'>
            <Col xs={10} lg={4}>
                <h3 style={{color:"#ffffff", paddingTop: '30px'}}>Experience</h3>
                <VerticalTimeline
                    className='custom-timeline'
                    layout="1-column"
                >
                    {populateExp()}
                </VerticalTimeline>
            </Col>
            <Col xs={10} lg={4}>
                <h3 style={{color:"#ffffff", paddingTop: '30px'}}>Projects</h3>
                <VerticalTimeline
                    className='custom-timeline'
                    //@ts-ignore
                    layout="1-column-right"
                >
                    {populateEdu()}
                </VerticalTimeline>
            </Col>
        </Row>
    )
}