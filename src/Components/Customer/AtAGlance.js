import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestUserAddressData } from "./../../redux/addressReducer";
import Loader from "react-loader-spinner"
import Iframe from "react-iframe"

import CustomerNav from "./CustomerNav";

class AtAGlance extends Component {
    componentDidMount(){
        this.props.requestUserAddressData();
    }
    render() {
        const { loading, addressList } = this.props
        if (loading) {
            return(
                <div className="address-list">
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={30000} />
                </div>
            )
        } else {
            const mappedUserAddresses = addressList.map((item) => {
                return (
                    <div key={item.id}>
                        <div>
                            <CustomerNav />
                        </div>
                        <div className="list">
                            <div className="address-list">
                                <div className="google-map">
                                    <Iframe url={item.map_url} max-width="250px" max-height="250px" display="initial" position="relative" />
                                </div>
                                <div>
                                    <h1>
                                        {item.street_address}<br />
                                        {item.city}, {item.state} {item.postal_code}
                                    </h1>
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
}
function mapStateToProps(store) {
    return {
        addressList: store.address.addressList,
        loading: store.address.loading
    }
}
export default connect(mapStateToProps, { requestUserAddressData })(AtAGlance);