import React from "react";
import './App.css'
import { Link } from "react-router-dom"
function Login({ defaultProps, setProps }) {

    console.log(defaultProps);
    setProps(true);
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-form-container">
                        <div className="login-form-text">
                            <h2>Welcome back!</h2>
                            <p>We're so excited to see you again!</p>
                        </div>
                        <form className="login-form">
                            <label>EMAIL OR PHONE NUMBER</label>
                            <input type="text" id="accountId" name="accountId" className="login-textbox" />
                            <label>PASSWORD</label>
                            <input type="password" id="accountPassword" name="accountPassword" className="login-textbox" />

                            <p>Forgot your password?</p>

                            <button type="submit" className="login-form-btn">Login</button>
                            <p>Need an account? <Link to="./register">Register</Link></p>
                        </form>
                    </div>

                    <div className="qr-form">
                        <img src="/dist/assets/discord-fakeqr.png" style={{ width: "auto", height: "60%" }}></img>
                        <h2>Log in with QR CODE</h2>
                        <p>Scan this with the <strong>Discord mobile app</strong> to log in instantly.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;