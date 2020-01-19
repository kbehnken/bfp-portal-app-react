import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestCallData } from "./../../redux/callReducer";
import { FaEye } from "react-icons/fa";
// import Loader from "react-loader-spinner";

import CustomerNav from "./CustomerNav";

class ViewServiceDetail extends Component {
    componentDidMount(){
        this.props.requestCallData();
    }
    render() {
        const { callList } = this.props
        const mappedCalls = callList.map((item) => {
            return (
                <div key={item.call_id}>
                    <div>
                        <CustomerNav />
                    </div>
                    <div className="list">
                        <div className="item-card">
                            <div>
                                {item.service_date}
                            </div>
                            <div>
                                <FaEye className="react-icons" size={20} onClick={() => this.toggleVisibility(item.id)} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                {mappedCalls}
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        callList: store.call.callList,
        loading: store.call.loading
    }
}
export default connect(mapStateToProps, { requestCallData })(ViewServiceDetail);