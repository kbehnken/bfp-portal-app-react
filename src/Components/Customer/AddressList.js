import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestUserAddressData } from "../../redux/addressReducer";
import Loader from "react-loader-spinner"

class AddressList extends Component {
    componentDidMount(){
        this.props.requestUserAddressData();
    }
    render() {
        const { loading, addressList } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedUserAddresses = addressList.map((item) => {
                return(
                    <div className="list" key={item.address_id}>
                        <div className="item-card">
                            <div>
                                <img src={item.photo_url} width="50%" alt="Swimming pool" />
                            </div>
                            <div>
                                <h1>
                                {item.street_address}<br />
                                    {item.city}, {item.state} {item.postal_code}
                                </h1>
                            </div>
                            <div>
                                <Link to="at-a-glance">
                                    View More
                                </Link>
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
export default connect(mapStateToProps, { requestUserAddressData })(AddressList);