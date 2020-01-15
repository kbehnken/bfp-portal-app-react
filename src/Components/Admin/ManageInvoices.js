import React from "react";
// import { Link } from "react-router-dom";

import AdminNav from "./AdminNav";
import AddInvoiceForm from "./AddInvoiceForm";
import UpdateInvoiceForm from "./UpdateInvoiceForm";
// import Buttons from "./../Buttons";

export default function ManageInvoices(props) {
    return(
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="list">
                <h1>
                    Manage Invoices
                </h1>
                <AddInvoiceForm />
                <div className="clear-left">
                    <UpdateInvoiceForm />
                </div>
            </div>
        </div>
    );
}