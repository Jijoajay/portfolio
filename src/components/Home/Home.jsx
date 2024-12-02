import React, { useState } from "react";
import "./Home.css";
import { BsDownload } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import waving from "../../assets/img/waving.png";
import { Helmet } from "react-helmet-async";
import hatIcon from "../../assets/img/hat.png"

export const Home = ({
  handleScrollToSkill,
  handleScrollToResume,
  handleScrollToWork,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMobileWorkScroll = () => {
    handleScrollToWork();
    setIsMenuOpen(false);
  };
  const handleMobileResumeScroll = () => {
    handleScrollToResume();
    setIsMenuOpen(false);
  };
  const handleMobileSkillScroll = () => {
    handleScrollToSkill();
    setIsMenuOpen(false);
  };

  


  const iconColor = "#8750f7";
  return (
    <div className="home-page">
    <Helmet>
        <meta name="description" content="This is the home page of ajay jijo website" />
        <meta name="keywords" content="full stack developer, ajay, jijoajay, ajayjijo, mobile app developer, react, react native" />
        <link rel="canonical" href="https://portfolio-80d2.onrender.com/" />      
    </Helmet>
      <div className="navbar">
        <div className="logo-mail">
          <div className="logo">
            <h1 className="logo-ajay">AJAY</h1>
            <img src={hatIcon} alt="hat-icon" className="hat-icon" />
          </div>
          <div>
            <a href="mailto:jijoajay45@gmail.com" target="_top">
              mail@jijoajay45.com
            </a>
          </div>
        </div>
        <div className="navbar-items">
          <div className="navbar-menu">
            <p onClick={handleScrollToWork}>Work</p>
            <p onClick={handleScrollToResume}>Resume</p>
            <p onClick={handleScrollToSkill}>Skills</p>
          </div>
          <div className="ham-menu">
            {!isMenuOpen ? (
              <RxHamburgerMenu className="menu" onClick={handleToggleMenu} />
            ) : (
              <RxCross1 className="menu" onClick={handleToggleMenu} />
            )}
          </div>
        </div>
      </div>
      <div className={`navbar-menu-mobile ${isMenuOpen ? "open" : "closed"}`}>
        <p onClick={handleMobileWorkScroll}>Work</p>
        <p onClick={handleMobileResumeScroll}>Resume</p>
        <p onClick={handleMobileSkillScroll}>Skills</p>
      </div>
      <div className="home-hero">
        <div className="snowfall">
          {
            Array(20).fill(0).map((_, index)=>(
              <div 
                className="snowflake" 
                key={index} 
                style={{left:`${(Math.floor(Math.random() * 100))}%`,animationDelay :`${(index + 1) * .5}s`}
              }></div>
            ))
          }
        </div>
        <div className="hero-content">
          <h3>I am Ajay</h3>
          <p className="content">
            Full Stack  +<br />
            Mobile App Developer
          </p>
          {/* <p className="content">
            Full Stack Developer 
          </p> */}
          <h4>
            I break down complex user experience problems to create
            integrity-focused solutions that connect billions of people
          </h4>
          <div className="download-container">
            <a
              href="https://drive.google.com/file/d/1TQi5TewuxOICaNPsv9ysqZB5UpdTv6am/view?usp=drive_link"
              target="_blank"
              className="download"
            >
              <button>Download CV </button>
              <p>
                <BsDownload className="download-icon" color={iconColor} />
              </p>
            </a>
            <div className="social-icons-cont">
              <div className="iconContainer">
                <a href="https://github.com/Jijoajay" target="_blank">
                  <FaGithub className="icon"/>
                </a>
              </div>
              <div className="iconContainer">
                <a href="https://www.linkedin.com/in/ajayjijo/" target="_blank">
                  <FaLinkedin className="icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img imgShow">
          <img src={waving} alt="rohit sharma" />
        </div>
      </div>
    </div>
  );
};
