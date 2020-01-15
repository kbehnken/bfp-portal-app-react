import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu} from "react-icons/gi";

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
                    <Link to="view-billing-detail" style={{ textDecoration: "none", color: "#4d4d4d" }}>
                        <div className="react_link">
                            Billing Detail
                        </div>
                    </Link>
                </nav>
                <div className="hamburger-div">
                    <GiHamburgerMenu className="hamburger-icon" size={36} onClick={this.toggleMenu} />
                    
                </div>
                <menu className={this.state.menuStatus}>
                    <Link to="/">
                        <div>
                            Dashboard
                        </div>
                    </Link>
                    <Link to="at-a-glance">
                        <div>
                            At A Glance
                        </div>
                    </Link>
                    <Link to="view-service-detail">
                        <div>
                            Service Detail
                        </div>
                    </Link>
                    <Link to="view-billing-detail">
                        <div>
                            Billing Detail
                        </div>
                    </Link>
                </menu>
            </div>
        );
    }
}
export default CustomerNav;