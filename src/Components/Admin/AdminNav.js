import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./../../styles/nav.scss";

class AdminNav extends Component {
    constructor() {
        super();
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
        return (
            <div>
                <nav>
                    <Link to="/" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Dashboard
                        </div>
                    </Link>
                    <Link to="manage-users" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Users
                        </div>
                    </Link>
                    <Link to="manage-services" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Services
                        </div>
                    </Link>
                    <Link to="manage-equipment" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Equipment
                        </div>
                    </Link>
                    <Link to="manage-service-calls" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Service Calls
                        </div>
                    </Link>
                    <Link to="manage-invoices" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react-link">
                            Invoices
                        </div>
                    </Link>
                </nav>
                <div className="hamburger-div">
                    <GiHamburgerMenu className="hamburger-icon" size={36} onClick={this.toggleMenu} />
                </div>
                <menu className={this.state.menuStatus}>
                    <div>
                        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                            Dashboard
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-users" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Users
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-services" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Services
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-equipment" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Equipment
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-service-calls" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Service Calls
                            </div>
                        </Link>
                        <hr />
                        <Link to="manage-invoices" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Invoices
                            </div>
                        </Link>
                        <hr />
                        <Link to="reset-password" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <div>
                                Reset Password
                            </div>
                        </Link>
                     </div>
                </menu>
            </div>
        );
    }
}
export default AdminNav;