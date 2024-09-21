import React from 'react'
import "./Resume.css"
import { PiCertificateBold } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { forwardRef } from 'react';
import { Helmet } from "react-helmet-async";


const Resume = forwardRef((props,ref) => {
    const innerWidth = window.innerWidth
    const mobileWidth = innerWidth < 600
    const leftAnimation = mobileWidth ? "mobileLeftShow" : "slideLeftshow"
    const rightAnimation = mobileWidth ?  "mobileRightShow" : "slideRightShow"
  return (
    <div className='resume-page' ref={ref}>
        <Helmet>
            <meta name="description" content="This is the about page of ajay jijo website" />
            <meta name="keywords" content="sri krishna arts and science, BBA, full stack developer, Alo info tech, Tech Nexus" />
            <link rel="canonical" href="https://portfolio-80d2.onrender.com/" />      
        </Helmet>
        <div className='exp-cont'>
            <div className='exp-title ' >
                <h1 className={leftAnimation}><PiCertificateBold color='#8750f7' /></h1>
                <h1 className={leftAnimation}>My Experience</h1>
            </div>
            <div className='exp-detail'>
                <div className={`detail-cont ${leftAnimation}`}> 
                    <h2>2023-2024</h2>
                    <h1>Python Full Stack Developer</h1>
                    <h4>Kanyakumari, Tamilnadu</h4>
                </div>
            </div>
        </div>
        <div className='exp-cont'>
            <div className='exp-title '>
                <h1 className={rightAnimation}><GiGraduateCap color='#8750f7' /></h1>
                <h1 className={rightAnimation}>My Education</h1>
            </div>
            <div className='exp-detail'>
                <div className={`detail-cont ${rightAnimation}`}>
                    <h2>2020-2023</h2>
                    <h1>BBA</h1>
                    <h4>Coimbatore, Tamilnadu</h4>
                </div>
                <div className={`detail-cont ${rightAnimation}`}>
                    <h2>2010-2020</h2>
                    <h1>12th</h1>
                    <h4>Kanyakumari, Tamilnadu</h4>
                </div>
                <div className={`detail-cont ${rightAnimation}`}>
                    <h2>2016-2018</h2>
                    <h1>10th</h1>
                    <h4>Kanyakumari, Tamilnadu</h4>
                </div>
            </div>
        </div>
    </div>
  )
});
export default Resume;
