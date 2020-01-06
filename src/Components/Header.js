import React from 'react';

export default function Header(props) {
    return (
        <div>
            <div>
                Beach Family Pools
            </div>
            <div className='logout' onClick={props.logoutFn}>
                Reset Password | Logout
            </div>
        </div>
    ); 
}