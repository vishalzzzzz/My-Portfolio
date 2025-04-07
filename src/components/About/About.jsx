import React from 'react'
import './About.css'
import profile_img from '../../assets/vishal.jpg'
import underline from '../../assets/theme_pattern.svg'


const About = () => {
    return (
        <div  id="About Me" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={underline} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />

                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend developer with 10 years of experience in multiple companies like microsoft,Tesla and Apple.</p>
                        <p>My passion for frontend development is not only </p>
                    </div>
                    <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}></hr ></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}></hr ></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}></hr ></div>
                    <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}}></hr ></div>

                    </div>
                </div>
            </div>

            <div className="about-achivements">
                 <div className="about-achivement">
                    <h1>10+</h1>
                    <p>Years of Experience</p>
                 </div>
                 <hr></hr>
                 <div className="about-achivement">
                    <h1>90+</h1>
                    <p>Projects Completed</p>
                 </div>
                 <hr></hr>
                 <div className="about-achivement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                 </div>
            </div>
        </div>
    )
}

export default About