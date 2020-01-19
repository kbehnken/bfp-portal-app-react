import React from "react";

import "./../styles/auth.scss";

export default function Auth(props) {
    const { emailAddress, password, handleEmailAddressInputFn, handlePasswordInputFn, loginFn, } = props;
    return (
        <div className="auth">
            <div>
                <div>
                    <img src="/assets/bfp-logo.png" width="50%" alt="Beach Family Pools logo"/>
                </div>
                <div>
                    <input type="text" placeholder="Enter email address" value={emailAddress} onChange={e => handleEmailAddressInputFn(e.target.value)}></input>
                </div>
                <div>
                    <input type="password" placeholder="Enter password" value={password} onChange={e => handlePasswordInputFn(e.target.value)}></input>
                </div>
                <div className="button-container">
                    <button onClick={loginFn}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}