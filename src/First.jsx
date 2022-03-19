import React from "react";
import './App.css'
import logo from './assets/icons/logo.svg';
import { Link } from 'react-router-dom'

function First() {
    return (
        <>
            <div className="landing-container">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="discord-logo" />

                    </div>
                    <div className="navi-btn-container">
                        <ul className="header-list">
                            <li>Download</li>
                            <li>Nitro</li>
                            <li>Safety</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="login-btn-container">
                        <Link to="./login" className="login-btn">Login</Link>
                    </div>
                </div>

                <div className="landing-container-sub">
                    <div className="landing-text">
                        <h2>IMAGINE A PLACE...</h2>
                        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
                    </div>
                    <div className="landing-btn-container">
                        <button className="download btn">Download for Windows</button>
                        <button className="open-in-browser btn">Open Discord in browser</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default First;