import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestUserAddressData } from "./../../redux/addressReducer";
// import Loader from "react-loader-spinner";

import CustomerNav from "./CustomerNav";

class AtAGlance extends Component {
    componentDidMount(){
        this.props.requestUserAddressData();
    }
    render() {
        const { addressList } = this.props
        const mappedUserAddresses = addressList.map((item) => {
            return (
                <div key={item.user_id}>
                    <div>
                        <CustomerNav />
                    </div>
                    <div className="list">
                        <div className="item-card">
                            <div>
                                <img src={item.photo_url} width="75%" alt="Swimming pool" />
                            </div>
                            <div>
                                <h1>
                                    {item.street_address}<br />
                                    {item.city}, {item.state} {item.postal_code}
                                </h1>
                            </div>
                        </div>
                        <div className="summary-container">
                            <div>
                                <h2>
                                    Service Summary
                                </h2>
                                <p>
                                    <label>Plan:</label>
                                </p>
                                <p>
                                    <label>
                                        Last Service Date:
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Next Service Date:
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Last Serviced By:
                                    </label>
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Account Summary
                                </h2>
                                <p>
                                    <label>
                                        Total Amount Due:
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Last Billing Date:
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Next Billing Date:
                                    </label>
                                </p>
                                <p>
                                    &nbsp; 
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Equipment Summary
                                </h2>
                                <p>
                                    <label>
                                        Pump:
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Filter Type:
                                    </label>
                                </p>
                                <p>
                                    &nbsp; 
                                </p>
                                <p>
                                    &nbsp; 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                {mappedUserAddresses}
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        addressList: store.address.addressList,
        loading: store.address.loading
    }
}
export default connect(mapStateToProps, { requestUserAddressData })(AtAGlance);