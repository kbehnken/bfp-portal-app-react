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
                        <h1>
                            At-A-Glance
                        </h1>
                        <h2 className="line-height-normal">
                            {item.street_address}<br />
                            {item.city}, {item.state} {item.postal_code}
                        </h2>
                        <div className="at-a-glance-img">
                            <img src={item.photo_url} width="97%" alt="Swimming pool" />
                        </div>
                            <div className="summary-container">
                                <div>
                                    <h2>
                                        Service Summary
                                    </h2>
                                    <p>
                                        <label>
                                            Plan: Weekly Cleaning &amp; Chems
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Last Service Date: 12/05/19
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Next Service Date: 12/12/19
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Last Serviced By: Jeremy Saffell
                                        </label>
                                    </p>
                                </div>
                                <div>
                                    <h2>
                                        Account Summary
                                    </h2>
                                    <p>
                                        <label>
                                            Total Amount Due: $0.00
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Last Payment Received: 01/05/20
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Last Billing Date: 12/14/19
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Next Billing Date: 01/14/20
                                        </label>
                                    </p>
                                </div>
                                <div>
                                    <h2>
                                        Equipment Summary
                                    </h2>
                                    <p>
                                        <label>
                                            Pump: Hayward 1.5 HP
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Filter Type: DE
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Pool Cleaner: Kreepy Krauly Kruiser
                                        </label>
                                    </p>
                                    <p>
                                        Skimmer Basket: Hayward SPX5500F
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