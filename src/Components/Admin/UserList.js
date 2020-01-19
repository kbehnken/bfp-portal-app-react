import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestUserData } from "./../../redux/userReducer";
import { FaPencilAlt } from "react-icons/fa";
import Loader from 'react-loader-spinner';

import UpdateUserForm from "./UpdateUserForm";

class UsersSummary extends Component {
    constructor (){
        super()
        this.state = {
            visible: []
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    componentDidMount(){
        this.props.requestUserData();
    }
    toggleVisibility(index) {
        let visible = this.state.visible.slice(0);
        visible[index] = !visible[index]
        this.setState( {
            visible: visible
        })
    }
    render() {
        const { loading, usersList } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedUsers = usersList.map((item) => {
                return(
                    <div key={item.id}>
                        <div className="item-card">
                            <div>
                                {item.first_name} {item.last_name}
                            </div>
                            <div>
                                <a href={"tel:" + item.phone_number}>{item.phone_number}</a> 
                            </div>
                            <div>
                                <a href={"mailto:" + item.email_address}>{item.email_address}</a>
                            </div>
                            <div>
                                <FaPencilAlt className="react-icons" size={20} onClick={() => this.toggleVisibility(item.id)} />
                            </div>
                        </div>
                        {this.state.visible[item.id]
                        ?
                        (<div className="clear-left">
                            <UpdateUserForm is_admin={item.is_admin} user_role={item.user_role} firstName={item.first_name} lastName={item.last_name} phoneNumber={item.phone_number} emailAddress={item.email_address} id={item.id} toggleVisibilityFn={this.toggleVisibility}/>
                        </div>)
                        :
                        (null)
                        }
                    </div>
                );
            })
            return(
                <div>
                    {mappedUsers}
                </div>
            );
        }
    }
}
function mapStateToProps(store) {
    return {
        usersList: store.users.usersList,
        loading: store.users.loading
    }
  }
export default connect(mapStateToProps, { requestUserData })(UsersSummary);