import React from 'react'
import './App.css'

export default function Register() {
    return (
        <div className="login-page">
            <div className="register-container">
                <div className="register-form-container">
                    <div className="login-form-text">
                        <h2>Create an account!</h2>
                    </div>
                    <form className="register-form">
                        <label>EMAIL OR PHONE NUMBER</label>
                        <input type="text" id="accountId" name="accountId" className="register-textbox" />
                        <label>USERNAME</label>
                        <input type="text" id="accountUserName" name="accountUserName" className="register-textbox" />
                        <label>PASSWORD</label>
                        <input type="password" id="accountPassword" name="accountPassword" className="register-textbox" />
                        <label>DATE OF BIRTH</label>
                        <input type="date" id="accountDoB" name="accountDoB" className="register-textbox" />
                        <input type="checkbox" id="term" name="term" />
                        <label for="term">I have read and agree to Discord's Terms of Service and Privacy Policy.</label>
                        <button type="submit" className="register-form-btn">Continue</button>
                    </form>
                </div>


            </div>
        </div >
    )
}

