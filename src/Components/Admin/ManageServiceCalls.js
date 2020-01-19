import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestUserData } from "./../../redux/userReducer";
import { GoTriangleRight } from "react-icons/go";
import Select from "react-select-native";

import AdminNav from "./AdminNav";
// import AddServiceCallForm from "./AddServiceCallForm";
// import UpdateServiceCallForm from "./UpdateServiceCallForm";
// import Buttons from "./../Buttons";

class ManageServiceCalls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCustomer: "",
            visibleSection: []
        }
        this.customerHandler = this.customerHandler.bind(this);
        this.showSection = this.showSection.bind(this);
        this.hideSection = this.hideSection.bind(this);
    }
    componentDidMount(){
        this.props.requestUserData();
    }
    customerHandler(selectedOption) {
        this.setState( {
            selectCustomer: selectedOption.target.value
        })
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
        const { selectCustomer } = this.state;
        const { usersList } = this.props;
        let mappedCustomers = usersList
            .filter(item => {
                if(item.user_role === "Customer") {
                    return item;
                }
                return false;
            })
            .map((item) => {
                return {
                    value: item.id,
                    label: item.first_name + " " + item.last_name
                }
            })
            mappedCustomers.unshift({value: "default", label: "Select customer"})
        return(
            <div>
                <div>
                    <AdminNav />
                </div>
                <div className="list">
                    <h1>
                        Manage Service Calls
                    </h1>
                    <div>
                        <label>
                            Select Customer:
                        </label>
                    </div>
                    <div>
                        <Select options={mappedCustomers} onChange={this.customerHandler} value={(e) => selectCustomer} placeholder={{value: "default", label: "Select customer"}} />
                    </div>
                    {selectCustomer 
                        ?(
                            <div>
                                <section>
                                    <div>
                                        <h2>
                                            <GoTriangleRight className="react-icons" size={13} /> Add Service Call
                                        </h2>
                                    </div>
                                </section>
                                <section>
                                <div>
                                        <h2>
                                            <GoTriangleRight className="react-icons" size={13} /> View &amp; Modify Service Calls
                                        </h2>
                                    </div>
                                </section>
                            </div>
                            // <div>
                            //     <AddServiceCallForm selectCustomer={selectCustomer} usersList={usersList}/>
                            //     <div className="clear-left">
                            //         <UpdateServiceCallForm />
                            //     </div>
                            // </div>
                        ):(
                            null
                        )
                    }
                </div>
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        usersList: store.users.usersList
    }
}
export default connect(mapStateToProps, { requestUserData })(ManageServiceCalls);