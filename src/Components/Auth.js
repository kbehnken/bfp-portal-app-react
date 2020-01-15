import React from 'react';

export default function Auth(props) {
    const { emailAddress, password, handleEmailAddressInputFn, handlePasswordInputFn, loginFn, } = props;
    return (
        <div>
            <div className="auth">
                <div>
                    <div>
                        <img src="/assets/bfp-logo.png" height="250px" alt="Beach Family Pools logo" />
                    </div>
                    <div>
                        <label>
                            Email Address: 
                        </label>
                    </div>
                    <div>
                        <input className="auth-input" type='text' value={emailAddress} onChange={e => handleEmailAddressInputFn(e.target.value)}></input>
                    </div>
                    <div>
                        <label>
                            Password: 
                        </label>
                    </div>
                    <div>
                        <input className="auth-input" type='password' value={password} onChange={e => handlePasswordInputFn(e.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={loginFn}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className="sand">
            </div>
        </div>
    )
}