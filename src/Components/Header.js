import React from 'react';
import { HashRouter as Router} from "react-router-dom";

import AdminRoutes from "./../AdminRoutes";
// import CustomerRoutes from "./../CustomerRoutes";

export default function Header(props) {
    return (
        <Router>
        <div>
            <header className="App-header">
                <div>
                    Beach Family Pools
                </div>
                <div>
                    Reset Password | <span onClick={props.logoutFn}>Logout</span>
                </div>
            </header>
            <div>
                <main>
                    { AdminRoutes }
                </main>
            </div>
        </div>
        </Router>
    ); 
}