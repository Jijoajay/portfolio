import React, {useState } from 'react';
import "./Home.css";
import { BsDownload } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import waving from "../../assets/img/waving.png"
export const Home = ({handleScrollToSkill,handleScrollToResume,handleScrollToWork}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const handleMobileWorkScroll = ()=>{
        handleScrollToWork();
        setIsMenuOpen(false)
    }
    const handleMobileResumeScroll = ()=>{
        handleScrollToResume();
        setIsMenuOpen(false)
    }
    const handleMobileSkillScroll = ()=>{
        handleScrollToSkill();
        setIsMenuOpen(false)
    }

   

    const iconColor = "#8750f7";
    return (
        <div className='home-page'>
            <div className='navbar'>
                <div className='logo-mail'>
                    <div className='logo'>
                        <h1>LOGO</h1>
                    </div>
                    <div>
                        <a href="jijoajay45@gmail.com" target="_top">mail@jijoajay45.com</a>
                    </div>
                </div>
                <div className='navbar-items'>
                    <div className='navbar-menu'>
                        <p onClick={handleScrollToWork}>Work</p>
                        <p onClick={handleScrollToResume}>Resume</p>
                        <p onClick={handleScrollToSkill}>Skills</p>
                    </div>
                    <div className='ham-menu'>
                        {!isMenuOpen ?
                            <RxHamburgerMenu className='menu' onClick={handleToggleMenu} />
                        :
                            <RxCross1 className='menu' onClick={handleToggleMenu} />
                        }
                    </div>
                </div>
            </div>
            <div className={`navbar-menu-mobile ${isMenuOpen ? 'open' : 'closed'}`}>
                <p onClick={handleMobileWorkScroll}>Work</p>
                <p onClick={handleMobileResumeScroll}>Resume</p>
                <p onClick={handleMobileSkillScroll}>Skills</p>
            </div>
            <div className='home-hero'>
                <div className='hero-content'>
                    <h3>I am Ajay</h3>
                    <p className='content'>Python Developer +<br />Frontend Developer</p>
                    <h4>I break down complex user experience problems to create integrity-focused solutions that connect billions of people</h4>
                    <div className='download-container'>
                        <a href="https://drive.google.com/file/d/1TQi5TewuxOICaNPsv9ysqZB5UpdTv6am/view?usp=drive_link" target='_blank' className='download'>
                            <button>Download CV </button>
                            <p><BsDownload className='download-icon' color={iconColor} /></p>
                        </a>
                        <div className='social-icons-cont'>
                            <div><a href="https://github.com/Jijoajay" target='_blank'><FaGithub size={16} color={iconColor} /></a></div>
                            <div><a href="https://www.linkedin.com/in/ajayjijo/" target='_blank'><FaLinkedin size={16} color={iconColor} /></a></div>
                        </div>
                    </div>
                </div>
                <div className='hero-img'>
                    <img src={waving} alt="rohit sharma" />
                </div>
            </div>
        </div>
    );
}
