import React, { Component } from "react";
import { connect } from "react-redux"
import { requestAddressDataByCustomer } from "./../../redux/addressReducer";
import { addInvoiceData } from "./../../redux/invoiceReducer";
import { FaPlusSquare } from "react-icons/fa";
import Select from "react-select-native";
import Loader from "react-loader-spinner";

class AddInvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCustomer: this.props.selectCustomer,
            selectAddress: null,
            serviceStart: "",
            serviceEnd: "",
            invoiceNumber: 0,
            invoiceAmount: 0,
            paymentDate: "",
            paymentType: "",
            paymentAmount: 0,
            invoiceBalance: 0,
            invoiceStatus: "",
            totalAmountDue: 0
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
    }
    componentDidMount(){
        this.props.requestAddressDataByCustomer(this.props.selectCustomer);
    }
    // componentDidUpdate(){
    //     this.props.requestAddressDataByCustomer(this.props.selectCustomer);
    // }
    changeHandler(key, value) {
        this.setState( {
            [key]: value
        });
    }
    addressHandler(selectedOption) {
        this.setState( {
            selectAddress: selectedOption
        })
    }
    addInvoice() {
        this.props.addInvoiceData(this.state.name, this.state.description)
        this.setState ({
            selectAddress: null,
            serviceStart: "",
            serviceEnd: "",
            invoiceNumber: 0,
            invoiceAmount: 0,
            paymentDate: "",
            paymentType: "",
            paymentAmount: 0,
            invoiceBalance: 0,
            invoiceStatus: "",
            totalAmountDue: 0
        });
    }
    render() {
        const { loading, addressList, selectCustomer } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            console.log(addressList)
            const mappedAddresses = addressList
            .map((item) => {
                return {
                    value: item.address_id,
                    label: item.street_address
                }
            })
            console.log(mappedAddresses)
            return(
            <div>
                <h2>
                    Add Invoice
                </h2>
                <div>
                    <label>Service Address:</label>
                </div>
                <div>
                    <Select name="selectAddress" onChange={this.addressHandler} value={this.state.selectAddress} options={mappedAddresses} />
                </div>
                <div>
                    <label>Service Start Date:</label>
                </div>
                <div>
                    <input type="date" name="serviceStart" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceStart} />
                </div>
                <div>
                    <label>Service End Date:</label>
                </div>
                <div>
                    <input type="date" name="serviceEnd" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceEnd} />
                </div>
                <div>
                    <label>Invoice Number:</label>
                </div>
                <div>
                    <input type="number" name="invoiceNumber" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceNumber} />
                </div>
                <div>
                    <label>Invoice Amount:</label>
                </div>
                <div>
                    <input type="money" name="invoiceAmount" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceAmount} />
                </div>
                <div>
                    <label>Payment Type:</label>
                </div>
                <div>
                    <input type="date" name="paymentType" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.paymentType} />
                </div>
                <div>
                    <label>Payment Amount:</label>
                </div>
                <div>
                    $<input type="number" name="paymentAmount" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.paymentAmount} />
                </div>
                <div>
                    <label>Invoice Balance:</label>
                </div>
                <div>
                    $<input type="number" name="invoiceBalance" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceBalance} />
                </div>
                <div>
                    <label>Invoice Status:</label>
                </div>
                <div>
                    <input type="number" name="invoiceStatus" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceStatus} />
                </div>
                <div>
                    <FaPlusSquare className="react-icons" size={75} onClick={() => this.addInvoice()} />
                </div>
            </div>
        )}
    }
}
function mapStateToProps(store) {
    return {
        addressList: store.address.addressList,
        loading: store.users.loading
    }
  }
export default connect(mapStateToProps, { requestAddressDataByCustomer, addInvoiceData })(AddInvoiceForm);