import React, { Component } from 'react';
import { Link } from "react-router-dom";

import AdminNav from "./Admin/AdminNav";

export default class ResetPasswordForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""    
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
            <div>
                <div>
                    <AdminNav />
                </div>
                <div className="list">
                    <h1>
                        Reset Password
                    </h1>
                    <form>
                        <div>
                            <label>Old Password:</label>
                        </div>
                        <div>
                            <input type="password" name="oldPassword" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.oldPassword} />
                        </div>
                        <div>
                            <label>New Password:</label>
                        </div>
                        <div>
                            <input type="password" name="newPassword" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.newPassword} />
                        </div>
                        <div>
                            <label>Confirm Password:</label>
                        </div>
                        <div>
                            <input type="password" name="confirmPassword" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.confirmPassword} />
                        </div>
                        <div className="button-container">
                            <button>
                                <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                                    Cancel
                                </Link>
                            </button>
                            <button>
                                Save
                            </button>
                            {/* { Buttons.js } */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}