import React, { Component } from "react";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";

import AdminNav from "./AdminNav";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import FilterUsers from './FilterUsers';

// import Buttons from "./../Buttons";

export default class ManageServices extends Component {
    constructor (){
        super()
        this.state = {
            visibleSection: []
        }
        this.showSection = this.showSection.bind(this);
        this.hideSection = this.hideSection.bind(this);
    }
    showSection(index) {
        let visibleSection = this.state.visibleSection.slice(0);
        visibleSection[index] = true
        this.setState( {
            visibleSection: visibleSection
        })
    }
    hideSection(index) {
        let visibleSection = this.state.visibleSection.slice(0);
        visibleSection[index] = false
        this.setState( {
            visibleSection: visibleSection
        })
    }
    render() {
        return(
            <div>
                <div>
                    <AdminNav />
                </div>
                <div className="list">
                    <h1>
                        Manage Users
                    </h1>
                    <section>
                        <div>
                            {this.state.visibleSection[0]
                                ?(
                                    <h2 onClick={() => this.hideSection(0)}>
                                        <GoTriangleDown className="react-icons" size={13} /> Add User
                                    </h2>
                                ):
                                (
                                    <h2 onClick={() => this.showSection(0)}>
                                        <GoTriangleRight className="react-icons" size={13} /> Add User
                                    </h2>
                                )
                            }
                            {this.state.visibleSection[0]
                                ?(
                                    <AddUserForm hideSectionFn={this.hideSection} />
                                ):
                                (
                                    null
                                )
                            }
                        </div>
                    </section>
                    <section>
                        <div>
                            {this.state.visibleSection[1]
                                ?(
                                    <h2 onClick={() => this.hideSection(1)}>
                                        <GoTriangleDown className="react-icons" size={13} /> View &amp; Modify Users
                                    </h2>
                                ):
                                (
                                    <h2 onClick={() => this.showSection(1)}>
                                        <GoTriangleRight className="react-icons" size={13}/> View &amp; Modify Users
                                    </h2>
                                )
                            }
                            {this.state.visibleSection[1]
                                ?(
                                    <div>
                                        <FilterUsers />
                                        <UserList />
                                    </div>
                                ):
                                (
                                    null
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}