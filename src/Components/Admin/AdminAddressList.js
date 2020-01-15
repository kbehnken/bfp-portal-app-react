import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestUserAddressData, removeAddressData } from "../../redux/addressReducer";
import Loader from "react-loader-spinner";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import Iframe from "react-iframe"

class AdminAddressList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: []
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    componentDidMount(){
        this.props.requestUserAddressData();
    }
    toggleVisibility(index) {
        let visible = this.state.visible.slice(0);
        visible[index] = !visible[index]
        this.setState( {
            visible: visible
        })
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
                    <div key={item.id}>
                        <div className="google-map">
                            <Iframe url={item.map_url} display="initial" />
                        </div>
                        <div>
                        <h1>
                            {item.street_address}<br />
                            {item.city}, {item.state} {item.postal_code}
                        </h1>
                        </div>
                        <div>
                            <FaPencilAlt className="react-icons" size={20} onClick={() => this.toggleVisibility(item.id)}/>
                            <FaTrashAlt className="react-icons" size={20} onClick={() => {removeAddressData(item.id)}} />
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
export default connect(mapStateToProps, { requestUserAddressData, removeAddressData })(AdminAddressList);