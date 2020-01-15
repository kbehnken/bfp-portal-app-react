import React, { Component } from "react";
import { FaPlusSquare } from "react-icons/fa";
import axios from "axios";

// import ServiceAddressesForm from "./ServiceAddressesForm";
// import Buttons from "./../Buttons";

export default class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            role: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: "",
            tempPassword: "",
            serviceAddresses: {}
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    addUser() {
        const { isAdmin, role, firstName, lastName, phoneNumber, emailAddress, tempPassword, serviceAddresses } = this.state;
        axios
        .post("api/user/add-user", {isAdmin, role, firstName, lastName, phoneNumber, emailAddress, tempPassword, serviceAddresses})
        .then(() => {
          this.setState( {
            isAdmin: false,
            role: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: "",
            tempPassword: "",
            serviceAddresses: {}
          });
        })
        .catch(err => {
          this.setState( {
            isAdmin: false,
            role: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: "",
            tempPassword: "",
            serviceAddresses: {}
          });
          alert(err.response.request.response)
        });
    }
    render() {
        return(
            <div className="form">
                <div className="is-admin">
                    <label>
                        Is Admin? 
                    </label>
                </div>
                <div className="is-admin">
                    <input type="checkbox" name="isAdmin" onChange={event => this.changeHandler(event.target.name, event.target.checked)} checked={this.state.isAdmin} />
                </div>
                <div className="clear-float">
                    <label>
                        Role: 
                    </label>
                </div>
                <div>
                    <input type="text" name="role" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.role} />
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
                    <label>Last Name: </label>
                </div>
                <div>
                    <input type="text" name="lastName" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.lastName} />
                </div>
                <div>
                    <label>
                        Phone Number: 
                    </label>
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
                    <input type="password" name="tempPassword" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.tempPassword} />
                </div>
                <div>
                    <FaPlusSquare className="react-icons" size={75} onClick={this.addUser} />
                </div>
            </div>
        )
    }
}