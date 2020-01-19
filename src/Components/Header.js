import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { connect } from "react-redux"
import { setSessionData } from "./../redux/sessionReducer";
// import { FaUserCircle } from "react-icons/fa";

import "./../styles/header.scss";

import AdminRoutes from "./../AdminRoutes";
import CustomerRoutes from "./../CustomerRoutes";

function Header(props) {
    const { isAdmin } = props.session
    return(
        <Router>
        <div>
            <header>
                <div>
                    <img src="/assets/bfp-logo.png" height="125px" alt="Beach Family Pools" />
                </div>
                <div className="user-box">
                    {/* <FaUserCircle className="react-icons" size={36} /> */}
                    <Link to="reset-password" className="react-link">Reset Password</Link> | <span className="logout" onClick={props.logoutFn}>Logout</span>
                </div>
            </header>
            {isAdmin ?
            (
            <div>
                <main>
                    { AdminRoutes }
                </main>
            </div>
            ):
            (
            <div>
                <main>
                    { CustomerRoutes }
                </main>
            </div>
            )}
        </div>
        </Router>
    ); 
}
function mapStateToProps(store) {
    return {
        session: store.session
    }
}
export default connect(mapStateToProps, { setSessionData })(Header);