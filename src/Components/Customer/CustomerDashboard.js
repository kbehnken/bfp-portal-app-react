import React from "react";

import AddressList from "./AddressList";
import Welcome from "./../Welcome"

export default function CustomerDashboard(props) {
    return (
        <div>
            <Welcome />
            <div>
                <AddressList />
            </div>
        </div>
    )
}