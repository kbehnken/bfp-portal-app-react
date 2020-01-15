import React from "react";
import { Link } from "react-router-dom";
import { FaUsersCog, FaCog, FaTools, FaSwimmingPool, FaDollarSign } from "react-icons/fa";

import Welcome from "./../Welcome"

export default function AdminDashboard(props) {
    return (
        <div className="content-container">
            <div>
                <Welcome />
            </div>
            <div className="manage-users-tile">
                <Link to="manage-users" style={{ textDecoration: "none", color: "#ffffff" }}>
                    <div>
                        <FaUsersCog className="admin-dashboard-icons" size={75} />
                    </div>
                    <h2>
                        Manage Users
                    </h2>
                </Link>
            </div>
            <div className="manage-service-calls-tile">
                <Link to="manage-service-calls" style={{ textDecoration: "none", color: "#ffffff" }}>
                    <div>
                        <FaSwimmingPool className="admin-dashboard-icons" size={75} />
                    </div>
                    <h2>
                        Manage Service Calls
                    </h2>
                </Link>
            </div>
            <div className="manage-invoices-tile">
                <Link to="manage-invoices" style={{ textDecoration: "none", color: "#ffffff" }}>
                    <div>
                        <FaDollarSign className="admin-dashboard-icons" size={75} />
                    </div>
                    <h2>
                        Manage Invoices
                    </h2>
                </Link>
            </div>
            <div className="manage-services-tile">
                <Link to="manage-services" style={{ textDecoration: "none", color: "#ffffff" }}>
                    <div>
                        <FaCog className="admin-dashboard-icons" size={75} />
                    </div>
                    <h2>
                        Manage Services
                    </h2>
                </Link>
            </div>
            <div className="manage-equipment-tile">
                <Link to="manage-equipment" style={{ textDecoration: "none", color: "#ffffff" }}>
                    <div>
                        <FaTools className="admin-dashboard-icons" size={75} />
                    </div>
                    <h2>
                        Manage Equipment
                    </h2>
                </Link>
            </div>
        </div>
    )
}