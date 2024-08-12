import React, { useState } from 'react';
import "./work.css";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import canosho from "../../assets/img/canosho.png"
import myntra from "../../assets/img/myntra_clone.png"
import eLearning from "../../assets/img/eLearning.png"
import instagramClone from "../../assets/img/instagramClone.png"
const Work = React.forwardRef((props, ref) => {
    const [isOpenProject, setIsOpenProject] = useState(false);
    const [currentTab, setCurrentTab] = useState("All");
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
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
        {
            "id": 3,
            "name": "E-learning Web",
            "short_description": "not clone of udemy but the concept by using react for the frontend and django restapi for backend",
            "description": "Not a clone of Udemy but the concept is similar, using React for the frontend and Django REST API for backend.",
            "image": eLearning,
            "url": "https://e-learing-frontend-1.onrender.com",
            "category": "Web"
        },
        {
            "id": 4,
            "name": "Chatbot",
            "short_description": "Simple chatbot application by using react and flask",
            "description": "Simple chatbot application by using React and Flask. Used TensorFlow framework to train the model with predefined JSON data.",
            "image": "https://dezyre.gumlet.io/images/resource/chatbot-mini-project-in-python-with-source-code/Python+Chatbot+Project+with+Source+Code.png",
            "url": "https://www.canosho.com/",
            "category": "ML"
        },
        {
            "id": 5,
            "name": "Instagram Clone",
            "short_description": "complete instagram mobile application clone",
            "description": "instatgram clone with all the features of the instagram but still under the development using react native and redux for managing the entire application state and node for the backend",
            "image": instagramClone,
            "url": "https://www.canosho.com/",
            "category": "App"
        },
    ];

    const handleChangeTab = (tab) => {
        setCurrentTab(tab);
    }

    const handleOpenPopUp = (project) => {
        setCurrentProject(project);
        setIsOpenProject(true);
    }

    const handleClosePopUp = () => {
        setIsOpenProject(false);
        setCurrentProject(null);
    }

    const filteredProjects = currentTab === "All"
        ? projects
        : projects.filter((project) => project.category === currentTab);

    return (
        <div className='work-page' ref={ref}>
            <div className='work-header'>
                <h1>My Recent Works</h1>
                <div className='work-title'>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that</p>
                    <p>inspires you and your customers.</p>
                </div>
            </div>
            <div className='work-buttons'>
                <button className={currentTab === "All" ? 'all' : ""} onClick={() => handleChangeTab("All")} style={{width:"70px"}}>All</button>
                <button className={currentTab === "Web" ? 'all' : ""} onClick={() => handleChangeTab("Web")} style={{width:"170px"}}>Web Development</button>
                <button className={currentTab === "ML" ? 'all' :""} onClick={() => handleChangeTab("ML")} style={{width:"auto"}}>ML & DL</button>
                <button className={currentTab === "App" ? 'all' :""} onClick={() => handleChangeTab("App")} style={{width:"auto"}}>App</button>
            </div>
            <div className='projects'>
                {filteredProjects.map((data) => (
                    <div key={data.id} className='work-items'>
                        <img src={data.image} className="project-image" alt="Project" />
                        <div className='short-popup'>
                            <div className='project-name'>
                                <h3>{data.name}</h3>
                                <p>{data.short_description}</p>
                            </div>
                            <div className='arrow-container'>
                                <FaArrowRight color={"white"} onClick={() => handleOpenPopUp(data)} className='arrow'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isOpenProject && currentProject && (
                <div className='project-detail-cont'>
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
});
export default Work;
