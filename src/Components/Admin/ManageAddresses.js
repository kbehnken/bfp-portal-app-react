import React from "react";
import { GoTriangleDown } from "react-icons/go";

import AdminAddressList from "./AdminAddressList";
import AddAddressForm from "./AddAddressForm";
// import Buttons from "./../Buttons";

export default function ManageAddresses(props) {
    return (
       <div>
            <div>
                <h2>
                <GoTriangleDown className="react-icons" size={20} />Service Address(es)
                </h2>
                <AddAddressForm />
            </div>
            <div>
                <h2>
                    Address List
                </h2>
                <AdminAddressList />
            </div>
        </div>
    );
}