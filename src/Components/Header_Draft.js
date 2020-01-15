import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { connect } from "react-redux"
import { setSessionData } from "./../redux/sessionReducer";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

import AdminRoutes from "./../AdminRoutes";
import CustomerRoutes from "./../CustomerRoutes";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuStatus: "hamburger-menu"
        };
    }
    toggleMenu = () => {
        if(this.state.menuStatus === "hamburger-menu" || this.state.menuStatus === "hamburger-menu-close") {
            this.setState( {
                menuStatus: "hamburger-menu-open"
            })
        } else {
            this.setState( {
                menuStatus: "hamburger-menu-close"
            })
        }
    }
    render() {
        const { isAdmin } = this.props.session
        return(
            <Router>
            <div>
                <header>
                    <div>
                        <img src="/assets/bfp-logo.png" height="125px" alt="Beach Family Pools" />
                    </div>
                    <div className="user-box">
                        {/* <FaUserCircle className="react-icons" size={36} /> */}
                        <Link to="reset-password" className="react-link">Reset Password</Link> | <span className="logout" onClick={this.props.logoutFn}>Logout</span>
                    </div>
                    <GiHamburgerMenu className="hamburger-icon" size={36} onClick={this.toggleMenu} />
                </header>
                <menu className={this.state.menuStatus}>
                    <div className="link-container">
                        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Dashboard
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-users" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Manage Users
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-services" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Manage Services
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-equipment" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Manage Equipment
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-service-calls" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Manage Service Calls
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-invoices" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Manage Invoices
                            </div>
                        </Link>
                        <hr />
                        <Link to="reset-password" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div className="react-link">
                                Reset Password
                            </div>
                        </Link>
                        <hr />
                        <div className="react-link">
                            <span className="logout">Logout</span>
                        </div>
                    </div>
                </menu>
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
}
function mapStateToProps(store) {
    return {
        session: store.session
    }
}
export default connect(mapStateToProps, { setSessionData })(Header);