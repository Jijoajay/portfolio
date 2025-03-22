import React, { useState } from 'react';
import "./work.css";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import canosho from "../../assets/img/canosho.png"
import myntra from "../../assets/img/myntra_clone.png"
import magicAisles from "../../assets/img/magic aisles.png"
import ashaHospital from "../../assets/img/ashaHospital.png"
import dotz from "../../assets/img/green dotz.png"
import { Helmet } from "react-helmet-async";


const Work = React.forwardRef((props, ref) => {
    const [isOpenProject, setIsOpenProject] = useState(false);
    const [currentTab, setCurrentTab] = useState("All");
    const [currentProject, setCurrentProject] = useState(null);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const projects = [
        {
            "id": 5,
            "name": "Magic Aisles",
            "short_description": "Magic Aisles is a client project still under developement",
            "description": "Developed a responsive static website for a client using React.js, Tailwind CSS, and Framer Motion for smooth animations. Implemented Intersection Observer API for scroll-based interactions, ensuring dynamic content appearance as per the client’s requirements.",
            "image": magicAisles,
            "url": "https://magic-aisles.vercel.app/",
            "category": "Web"
        },
        {
            "id": 6,
            "name": "Asha Hospital",
            "short_description": "Asha hospital is a static website and its complete responsive one and hosted this websited in the AWS EC2",
            "description": "Developed a fully responsive static website for a hospital using React.js and Tailwind CSS. The website is optimized for mobile devices, ensuring a smooth user experience.",
            "image": ashaHospital,
            "url": "https://www.asha.greendotz.in/",
            "category": "Web"
        },
        {
            "id": 7,
            "name": "Green Dotz",
            "short_description": "Green Dotz is a static website developed to showcase the products ",
            "description": "Developed Greendotz, a single-page static e-commerce website designed to showcase available products. Built using React.js and Tailwind CSS, the website is fully responsive and optimized for fast performance. Deployed on AWS for high availability and scalability.",
            "image": dotz,
            "url": "https://www.greendotz.in/",
            "category": "Web"
        },
        {
            "id": 1,
            "name": "Canosho",
            "short_description": "project is all about providing consulting service to customer",
            "description": "Canosho is a consulting service application where the seeker books the service which is provided by the provider according to the provider's availability",
            "image": canosho,
            "url": "http://ec2-44-203-37-226.compute-1.amazonaws.com/",
            "category": "Web"
        },
        {
            "id": 2,
            "name": "Myntra Clone",
            "short_description": "exact clone of myntra by using react for the frontend and django restapi for backend",
            "description": "Exact clone of Myntra by using React for the frontend and Django REST API for backend.",
            "image": myntra,
            "url": "https://myntra-clone-4rzz.onrender.com/",
            "category": "Web"
        },
    ];

    const handleChangeTab = (tab) => {
        setCurrentTab(tab);
    }


    const handleOpenPopUp = (project, event) => {
        const rect = event.target.getBoundingClientRect(); // Get image position
        setModalPosition({ 
            top: rect.top + window.scrollY, // Adjust for scroll position
            left: rect.left + rect.width / 2  // Center modal horizontally
        });
        setCurrentProject(project);
        setIsOpenProject(true);
    };

    const handleClosePopUp = () => {
        setIsOpenProject(false);
        setCurrentProject(null);
    }

    const filteredProjects = currentTab === "All"
        ? projects
        : projects.filter((project) => project.category === currentTab);

    return (
        <div className='work-page' ref={ref}>
            <Helmet>
                <meta name="description" content="This is the work page of ajay jijo website" />
                <meta name="keywords" content="web developing, app developing, full stack, canosho, myntra, myntra clone, riyamobiles" />
                <link rel="canonical" href="https://portfolio-80d2.onrender.com/" />      
            </Helmet>
            <div className='work-header '>
                <h1 className='autoshow'>My Recent Works</h1>
                <div className='work-title autoshow'>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that</p>
                    <p>inspires you and your customers.</p>
                </div>
            </div>
            {/* <div className='work-buttons autoshow'>
                <button className={currentTab === "All" ? 'all' : ""} onClick={() => handleChangeTab("All")} style={{width:"70px"}}>All</button>
                <button className={currentTab === "Web" ? 'all' : ""} onClick={() => handleChangeTab("Web")} style={{width:"170px"}}>Web Development</button>
                <button className={currentTab === "ML" ? 'all' :""} onClick={() => handleChangeTab("ML")} style={{width:"auto"}}>ML & DL</button>
                <button className={currentTab === "App" ? 'all' :""} onClick={() => handleChangeTab("App")} style={{width:"auto"}}>App</button>
            </div> */}
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1  md:gap-[4vw] pb-[1.5em]'>
                    {filteredProjects.map((data, index) => (
                        <div 
                            key={data.id} 
                            className={`h-[180px] w-full md:h-[400px] lg:w-[800px] sticky top-[150px] md:top-[100px] transition-all duration-500`}
                            onClick={(event) => handleOpenPopUp(data, event)}
                         >
                            <img src={data.image} className="project-image" alt="Project" style={{ paddingTop: `${30 * index }px`,  }}  />
                            <div className='short-popup'>
                                <div className='project-name'>
                                    <h3>{data.name}</h3>
                                    <p>{data.short_description}</p>
                                </div>
                                <div className='arrow-container'>
                                    <FaArrowRight color={"white"} className='arrow'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isOpenProject && currentProject && (
                <div 
                    className='project-detail-cont' 
                    style={{ position: "absolute", top: `${modalPosition.top}px`, left: `${modalPosition.left}px`, transform: "translate(-50%, 0)" }}
                >
                    <div className='project-detail'>
                        <div className='project-detail-img'>
                            <img src={currentProject.image} className='project-img' alt="project_image" />
                        </div>
                        <div className='project-detail-content'>
                            <h1>{currentProject.name}</h1>
                            <p>{currentProject.description}</p>
                            <div>
                                <button onClick={() => window.open(currentProject.url, "_blank")}>Live Preview</button>
                                <FaArrowRight size={16} color={"white"} />
                            </div>
                        </div>
                    </div>
                    <div className='cross-cont'>
                        <RxCross2 size={20} className='cross' onClick={handleClosePopUp} />
                    </div>
                </div>
            )}
        </div>
    );
}
);
export default Work;
