import React from "react";
import { Link } from "react-router-dom";
import { FaUsersCog, FaCog, FaTools, FaSwimmingPool, FaDollarSign } from "react-icons/fa";

import "./../../styles/admin-dashboard.scss";

import Welcome from "./../Welcome"

export default function AdminDashboard(props) {
    return (
        <div>
            <Welcome />
            <div className="tile-container">
                <div className="manage-users-tile">
                    <Link to="manage-users" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <FaUsersCog className="admin-dashboard-icons" size={75} />
                        <h2>
                            Manage Users
                        </h2>
                    </Link>
                </div>
                <div className="manage-service-calls-tile">
                    <Link to="manage-service-calls" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <FaSwimmingPool className="admin-dashboard-icons" size={75} />
                        <h2>
                            Manage Service Calls
                        </h2>
                    </Link>
                </div>
                <div className="manage-invoices-tile">
                    <Link to="manage-invoices" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <FaDollarSign className="admin-dashboard-icons" size={75} />
                        <h2>
                            Manage Invoices
                        </h2>
                    </Link>
                </div>
                <div className="manage-services-tile">
                    <Link to="manage-services" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <FaCog className="admin-dashboard-icons" size={75} />
                        <h2>
                            Manage Services
                        </h2>
                    </Link>
                </div>
                <div className="manage-equipment-tile">
                    <Link to="manage-equipment" style={{ textDecoration: "none", color: "#ffffff" }}>
                        <FaTools className="admin-dashboard-icons" size={75} />
                        <h2>
                            Manage Equipment
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}