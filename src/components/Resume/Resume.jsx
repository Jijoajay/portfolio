import React from 'react'
import "./Resume.css"
import { PiCertificateBold } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { forwardRef } from 'react';

const Resume = forwardRef((props,ref) => {
  return (
    <div className='resume-page' ref={ref}>
        <div className='exp-cont'>
            <div className='exp-title'>
                <h1><PiCertificateBold color='#8750f7' /></h1>
                <h1>My Experience</h1>
            </div>
            <div className='exp-detail'>
                <div className='detail-cont'> 
                    <h2>2023-2024</h2>
                    <h1>Python Full Stack Developer</h1>
                    <h4>Kanyakumari, Tamilnadu</h4>
                </div>
            </div>
        </div>
        <div className='exp-cont'>
            <div className='exp-title'>
                <h1><GiGraduateCap color='#8750f7' /></h1>
                <h1>My Education</h1>
            </div>
            <div className='exp-detail'>
                <div className='detail-cont'>
                    <h2>2020-2023</h2>
                    <h1>BBA</h1>
                    <h4>Coimbatore, Tamilnadu</h4>
                </div>
                <div className='detail-cont'>
                    <h2>2010-2020</h2>
                    <h1>12th</h1>
                    <h4>Kanyakumari, Tamilnadu</h4>
                </div>
                <div className='detail-cont'>
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
