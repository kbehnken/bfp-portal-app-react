import React, { Component } from 'react';
import { connect } from "react-redux"
import { addAddressData } from "../../redux/addressReducer";
import { FaPlusSquare } from "react-icons/fa";

class AddAddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streetAddress: "",
            city: "",
            state: "",
            postalCode: "",
            mapUrl: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.addAddress = this.addAddress.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    addAddress() {
        this.props.addAddressData(this.state.streetAddress, this.state.city, this.state.state, this.state.postalCode, this.state.mapUrl)
        this.setState ({
            streetAddress: "",
            city: "",
            state: "",
            postalCode: "",
            mapUrl: ""
        });
    }
    render() {
        return(
            <div>
                <div>
                    <label>Street Address:</label>
                </div>
                <div>
                    <input type="text" name="streetAddress" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.streetAddress} />
                </div>
                <div>
                    <label>City:</label>
                </div>
                <div>
                    <input type="text" name="city" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.city} />
                </div>
                <div>
                    <label>State:</label>
                </div>
                <div>
                    <input type="text" name="state" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.state} />
                </div>
                <div>
                    <label>Postal Code:</label>
                </div>
                <div>
                    <input type="number" name="postalCode" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.postalCode} />
                </div>
                <div>
                    <label>Google Map URL:</label>
                </div>
                <div>
                    <input type="text" name="mapUrl" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.mapUrl} />
                </div>
                <div>
                    <FaPlusSquare className="react-icons" size={75} onClick={() => this.addAddress()} />
                </div>
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
export default connect(mapStateToProps, { addAddressData })(AddAddressForm);