import React from "react";
import './App.css'
import logo from './assets/icons/logo.svg';

function Footer() {
    return (
        <>
            <div className="footer-container isHidden">
                <div className="footer-grid">
                    <div className="grid">
                        <h2>IMAGINE A PLACE
                        </h2>
                        <p>Vietnam, TP.HCM</p>
                        <img />
                    </div>
                    <div className="grid">
                        <h5>Product</h5>
                        <a href="">Download</a>
                        <a href="">Nitro</a>
                        <a href="">Status</a>
                    </div>
                    <div className="grid">
                        <h5>Company</h5>
                        <a href="">About</a>
                        <a href="">Jobs</a>
                        <a href="">Branding</a>
                        <a href="">Newsroom</a>

                    </div>
                    <div className="grid">
                        <h5>Resources</h5>
                        <a href="">College</a>
                        <a href="">Support</a>
                        <a href="">Safety</a>
                        <a href="">Blog</a>
                        <a href="">Feedback</a>
                        <a href="">Developers</a>
                        <a href="">Streamkit</a>
                    </div>
                    <div className="grid">
                        <h5>Policies</h5>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                        <a href="">Cookie Settings</a>
                        <a href="">Guidelines</a>
                        <a href="">Acknowledgements</a>
                        <a href="">Licenses</a>
                        <a href="">Moderation</a>

                    </div>
                </div>

                <div className="footer-end">
                    <div className="logo">
                        <img src={logo} alt="discord-logo" />

                    </div>

                    <div className="signup-container">
                        <button className="signup-btn">Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;