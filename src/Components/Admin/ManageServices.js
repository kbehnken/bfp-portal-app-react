import React from "react";

import AdminNav from "./AdminNav";
import ServiceList from "./ServiceList";
import AddServiceForm from "./AddServiceForm";
// import Buttons from "./../Buttons";

export default function ManageServices(props) {
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="list">
                <h1>
                    Manage Services
                </h1>
                <div>
                    <h2>
                        Add Service
                    </h2>
                    <AddServiceForm />
                </div>
                <div>
                    <h2>
                        Service List
                    </h2>
                    <ServiceList />
                </div>
            </div>
        </div>
    );
}