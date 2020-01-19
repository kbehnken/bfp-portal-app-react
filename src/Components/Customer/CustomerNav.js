import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi";

import "./../../styles/nav.scss";

class CustomerNav extends Component {
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
                        <div className="react_link">
                            Dashboard
                        </div>
                    </Link>
                    <Link to="at-a-glance" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react_link">
                            At A Glance
                        </div>
                    </Link>
                    <Link to="view-service-detail" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react_link">
                            Service Detail
                        </div>
                    </Link>
                    <Link to="view-invoice-detail" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react_link">
                            Billing Detail
                        </div>
                    </Link>
                </nav>
                <div className="hamburger-div">
                    <GiHamburgerMenu className="hamburger-icon" size={36} onClick={this.toggleMenu} />
                </div>
                <menu className={this.state.menuStatus}>
                    <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <div className="react-link">
                            Dashboard
                        </div>
                    </Link>
                    <hr />
                    <Link to="at-a-glance" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <div className="react-link">
                            At A Glance
                        </div>
                    </Link>
                    <hr />
                    <Link to="view-service-detail" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <div className="react-link">
                            Service Detail
                        </div>
                    </Link>
                    <hr />
                    <Link to="view-invoice-detail" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <div className="react-link">
                            Billing Detail
                        </div>
                    </Link>
                    <hr />
                    <Link to="reset-password" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <div className="react-link">
                            Reset Password
                        </div>
                    </Link>
                </menu>
            </div>
        );
    }
}
export default CustomerNav;