import React from 'react';
import './Navbar.css';
import underline from '../../assets/theme_pattern.svg';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useRef } from 'react';
export default function Navbar() {
  const[menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right ="-350px";
  };

  return (
    <div className="navbar">
      <img src={menu_open } onClick={openMenu} alt='' className="nav-mob-open" />
      <ul  ref={menuRef}className="navbar-list">
        <img src={menu_close } onClick={closeMenu} alt='' className="nav-mob-close" />
        <li><AnchorLink className="anchor-link" href="#Home"><p onClick={()=> setMenu("Home")}>Home</p></AnchorLink>{menu==="Home"?<img src={underline } alt='' className="logo" />:<></>}</li>
        <li><AnchorLink  className="anchor-link"  offset={50} href="#About Me"><p onClick={()=> setMenu("About Me")}>About Me</p></AnchorLink>{menu==="About Me"?<img src={underline} alt="" className="logo" />:<></>}</li>
        <li><AnchorLink  className="anchor-link"  offset={50} href="#Service"><p onClick={()=> setMenu("Services")}> My Services</p></AnchorLink>{menu==="Services"?<img src={underline} alt="" className="logo" />:<></>}</li>
        <li><AnchorLink  className="anchor-link"  offset={50} href="#MyWork"><p onClick={()=> setMenu("Mywork")}>MyWork</p></AnchorLink>{menu==="Mywork"?<img src={underline} alt="" className="logo" />:<></>}</li>
        <li><AnchorLink  className="anchor-link"  offset={50} href="#Contact Us"><p onClick={()=> setMenu("Contact Us")}>Contact Us</p></AnchorLink>{menu==="Contact Us"?<img src={underline} alt="" className="logo" />:<></>}</li>

      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link"  offset={50} href="#Contact Us">Connect with me</AnchorLink></div>
    
      
    </div>
  );
}
