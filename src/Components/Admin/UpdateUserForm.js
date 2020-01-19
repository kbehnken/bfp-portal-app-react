import React, { Component } from 'react';
import { connect } from "react-redux"
import { updateUserData } from "./../../redux/userReducer";

import ManageAddresses from "./ManageAddresses";
// import ServiceAddressesForm from './ServiceAddressesForm';
// import Buttons from './../Buttons';

class UpdateUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: this.props.is_admin,
            userRole:  this.props.user_role,
            firstName:  this.props.firstName,
            lastName:  this.props.lastName,
            phoneNumber:  this.props.phoneNumber,
            emailAddress:  this.props.emailAddress,
            password:  "",
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    render() {
        return (
            <div className="form">
                <div className="float-left">
                    <label>
                        Is Admin?
                    </label>
                </div>
                <div className="float-left">
                    <input type="checkbox" name="isAdmin" onChange={event => this.changeHandler(event.target.name, event.target.value)} checked={this.state.isAdmin?"checked":""}/>
                </div>
                <div className="clear-float">
                    <label>
                        Role:
                    </label>
                </div>
                <div>
                    <input type="text" name="userRole" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.userRole} />
                </div>
                <div>
                    <label>
                        First Name:
                    </label>
                </div>
                <div>
                    <input type="text" name="firstName" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.firstName} />
                </div>
                <div>
                    <label>
                        Last Name:
                    </label>
                </div>
                <div>
                    <input type="text" name="lastName" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.lastName} />
                </div>
                <div>
                    <label>Phone Number:</label>
                </div>
                <div>
                    <input type="tel" name="phoneNumber" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.phoneNumber} />
                </div>
                <div>
                    <label>
                        Email Address:
                    </label>
                </div>
                <div>
                    <input type="email" name="emailAddress" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.emailAddress} />
                </div>
                <div>
                    <label>
                        Temporary Password:
                    </label>
                </div>
                <div>
                    <input type="password" name="password" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.password} />
                </div>
                <div>
                    <ManageAddresses />
                </div>
                <div className="button-container">
                    <button onClick={() => {this.props.toggleVisibilityFn(this.props.id)}}>
                        Cancel
                    </button>
                    <button onClick={() => {this.props.updateUserData(this.state.isAdmin, this.state.userRole, this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.emailAddress, this.state.password, this.props.id, this.state.service_address_id)}}>
                        Save
                    </button>
                    {/* { Buttons.js } */}
                </div>
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        usersList: store.users.userList,
        loading: store.users.loading
    }
}
export default connect(mapStateToProps, { updateUserData })(UpdateUserForm);