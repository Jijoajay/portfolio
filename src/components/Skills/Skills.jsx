import React from 'react'
import pythonImg from '../../assets/img/python.png';
import flaskImg from "../../assets/img/flask.png"
import djangoImg from "../../assets/img/django.png"
import reactImg from "../../assets/img/react.png"
import mysqlImg from "../../assets/img/mysql.png"
import tfImg from "../../assets/img/tensorflow.png"
import jsImg from "../../assets/img/javascript.png"
import { forwardRef } from 'react'; 
import { Helmet } from "react-helmet-async";
import "./Skills.css"
const Skills = forwardRef((props,ref) => {
  return (
    <div className='skill-page' ref={ref}>
        <Helmet>
            <meta name="description" content="This is the skill page of ajay jijo website" />
            <meta name="keywords" content="react, python, flask, django, react native, typescript, javascript, aws, tensorflow" />
            <link rel="canonical" href="https://portfolio-80d2.onrender.com/" />      
        </Helmet>
        <h1 className='skill-title autoshow'>My Skills</h1>
        <div className='skill-detail autoshow'>
            <p>We put your ideas and thus your wishes in the form of a unique web project that</p>
            <p>inspires you and you customers.</p>
        </div>
        <div className='all-skill'>
            <div className='skill-cont iconShow'>
                <div className='img-cont '>
                    <img src={pythonImg} alt="" />
                    <h1>80%</h1>
                </div>
                <h1>Python</h1>
            </div>
            <div className='skill-cont  iconShow'>
                <div className='img-cont'>
                    <img src={flaskImg} alt="" />
                    <h1>90%</h1>
                </div>
                <h1>Flask</h1>
            </div>
            <div className='skill-cont iconShow'>
                <div className='img-cont'>
                    <img src={djangoImg} alt="" />
                    <h1>85%</h1>
                </div>
                <h1>Django</h1>
            </div>
            <div className='skill-cont iconShow'>
                <div className='img-cont'>
                    <img src={reactImg} alt="" />
                    <h1>85%</h1>
                </div>
                <h1>React</h1>
            </div>
            <div className='skill-cont iconShow'>
                <div className='img-cont'>
                    <img src={mysqlImg} alt="" />
                    <h1>80%</h1>
                </div>
                <h1>MySQL</h1>
            </div>
            <div className='skill-cont iconShow'>
                <div className='img-cont'>
                    <img src={tfImg} alt="" />
                    <h1>50%</h1>
                </div>
                <h1>Tensorflow</h1>
            </div>
            <div className='skill-cont iconShow'>
                <div className='img-cont'>
                    <img src={jsImg} alt="" />
                    <h1>60%</h1>
                </div>
                <h1>JavaScript</h1>
            </div>
        </div>
    </div>
  )
});

export default Skills;
