import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCallData } from "./../../redux/callReducer";
import { GoTriangleDown, GoTriangleRight } from "react-icons/go";
import Loader from "react-loader-spinner";

import CustomerNav from "./CustomerNav";
import ServiceCall from "./ServiceCall";

class ViewServiceDetail extends Component {
    constructor (){
        super()
        this.state = {
            visibleSection: []
        }
        this.showSection = this.showSection.bind(this);
        this.hideSection = this.hideSection.bind(this);
    }
    componentDidMount(){
        this.props.requestCallData();
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
        const { loading, callList } = this.props;
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedCalls = callList.map((item) => {
                return (
                    <div key={item.call_id}>
                        <div className="item-card">
                            {this.state.visibleSection[item.call_id]
                                ?(
                                    <div onClick={() => this.hideSection(1)}>
                                        <GoTriangleDown className="react-icon" size={13} /> Serviced on {item.service_date} by {item.technician}
                                    </div>
                                ):
                                (
                                    <div onClick={() => this.showSection(1)}>
                                        <GoTriangleRight className="react-icons" size={13} /> Serviced on {item.service_date} by {item.technician}
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {this.state.visibleSection[item.call_id]
                                ?(
                                    <ServiceCall call={item} />
                                ):
                                (
                                    null
                                )
                            }
                        </div>
                    </div>
                );
            })
            return(
                <div>
                    <div>
                        <CustomerNav />
                    </div>
                    <div className="list">
                        <h1>
                            Service Call History
                        </h1>
                        {mappedCalls}
                    </div>
                </div>
            );
        }
    }
}
function mapStateToProps(store) {
    return {
        callList: store.call.callList,
        loading: store.call.loading
    }
}
export default connect(mapStateToProps, { requestCallData })(ViewServiceDetail);