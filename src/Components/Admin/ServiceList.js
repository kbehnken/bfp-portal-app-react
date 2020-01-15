import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestServiceData, removeServiceData } from "./../../redux/serviceReducer";
import Loader from "react-loader-spinner"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import UpdateServiceForm from "./UpdateServiceForm";

class ServiceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: []
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }
    componentDidMount(){
        this.props.requestServiceData();
    }
    toggleVisibility(index) {
        let visible = this.state.visible.slice(0);
        visible[index] = !visible[index]
        this.setState( {
            visible: visible
        })
    }
    render() {
        const { loading, serviceList, removeServiceData } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedServices = serviceList.map((item) => {
                return(
                    <div key={item.id}>
                        <div className="item-card">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                <FaPencilAlt className="react-icons" size={20} onClick={() => {this.toggleVisibility(item.id)}} />
                                <FaTrashAlt className="react-icons" size={20} onClick={() => {removeServiceData(item.id)}} />
                            </div>
                        </div>
                        {this.state.visible[item.id] ?
                            (   
                            <div className="clear-left">
                                <UpdateServiceForm name={item.name} description={item.description} id={item.id} toggleVisibilityFn={this.toggleVisibility} />
                            </div>
                            ) :
                            (
                                null
                            )
                        }
                    </div>
                );
            })
        return(
            <div>
                {mappedServices}
            </div>
        );
        }
    }
}
function mapStateToProps(store) {
    return {
        serviceList: store.service.serviceList,
        loading: store.service.loading
    }
}
export default connect(mapStateToProps, { requestServiceData, removeServiceData })(ServiceList);