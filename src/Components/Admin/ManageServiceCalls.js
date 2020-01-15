import React from "react";
import { Link } from "react-router-dom";

import AdminNav from "./AdminNav";
// import { FaPencilAlt } from "react-icons/fa";

// import ServiceCallSummary from './ServiceCallSummary';

export default function AdminDashboard(props) {
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="list">
                <h1>
                    Manage Service Calls
                </h1>
                <div>
                    <Link to="add-service-call">
                        Add Service Call
                    </Link>
                </div>
                <div>
                    <Link to="update-service-call">
                        Edit Service Call
                    </Link>
                </div>
                <div>
                    {/* <ServiceCallSummary /> */}
                </div>
            </div>
        </div>
    )
}