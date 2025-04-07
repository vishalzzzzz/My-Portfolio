import React from 'react'
import './Hero.css'
import profile_img from '../../assets/vishal.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'; 

const Hero = () => {
    return (
        <div  id="Home"className="hero">


            <img src={profile_img} alt="" />

            <h1><span>i'm Vishal Pandey,</span>Full Stack Web Developer</h1>
            <p>I'm a Full Stack Web Developer from Jaipur (Rajsthan),  with 10 years of experience in multiple componies like microsoft,Tesla and Apple.</p>
            
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink  className="anchor-link"  offset={50} href="#Contact Us">connect with me</AnchorLink></div>
                <div className="hero-resume"> My Resume</div>
            </div>
        </div>
    )
}

export default Hero