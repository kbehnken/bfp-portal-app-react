import React from "react";

import AdminNav from "./AdminNav";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import FilterUsers from './FilterUsers';

// import Buttons from "./../Buttons";

export default function ManageServices(props) {
    return(
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="list">
                <h1>
                    Manage Users
                </h1>
                <div>
                    <h2>
                        Add User
                    </h2>
                   <AddUserForm /> 
                </div>
                <div>
                    <h2>
                        User List
                    </h2>
                    <FilterUsers />
                    <UserList />
                </div>
            </div>
        </div>
    );
}