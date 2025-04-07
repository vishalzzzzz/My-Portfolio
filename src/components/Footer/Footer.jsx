import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <p>I am forntend developer from , USA with 10 years of experience.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <input type="email" placeholder="Enter Your Email"></input>
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-bottom">
                    <p className="footer-bottom-left"> &copy; 2022 Vishal Pandey All Rights Reserved</p>
                    <div className="footer-bottom-right">
                        <p> Term of Services</p>
                        <p> Privacy policy</p>
                        <p> Connect with me</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer