import React from "react";
import { Switch, Route } from "react-router-dom";

import AdminDashboard from "./Components/Admin/AdminDashboard";
// import Header from "./Components/Header";
import ResetPasswordForm from "./Components/ResetPasswordForm";
import ManageUsers from "./Components/Admin/ManageUsers";
import AddUserForm from "./Components/Admin/AddUserForm";
import UpdateUserForm from "./Components/Admin/UpdateUserForm";
import ManageServices from "./Components/Admin/ManageServices";
import ManageEquipment from "./Components/Admin/ManageEquipment";
import ManageServiceCalls from "./Components/Admin/ManageServiceCalls";
import ManageInvoices from "./Components/Admin/ManageInvoices";
import AddServiceCallForm from "./Components/Admin/AddServiceCallForm";

export default (
  <Switch>
    {/* <Route path="" component={Header}/> */}
    <Route exact path="/" component={AdminDashboard}/>
    <Route path="/reset-password" component={ResetPasswordForm}/>
    <Route path="/manage-users" component={ManageUsers}/>
    <Route path="/add-user" component={AddUserForm}/>
    <Route path="/update-user" component={UpdateUserForm}/>
    <Route path="/manage-services" component={ManageServices}/>
    <Route path="/manage-equipment" component={ManageEquipment}/>
    <Route path="/manage-service-calls" component={ManageServiceCalls}/>
    <Route path="/manage-invoices" component={ManageInvoices}/>
    <Route path="/add-service-call" component={AddServiceCallForm}/>
  </Switch>
);