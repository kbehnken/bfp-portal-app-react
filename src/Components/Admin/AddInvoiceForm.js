import React, { Component } from "react";
import { connect } from "react-redux"
import { requestUserData } from "./../../redux/userReducer";
import { requestUserAddressData } from "./../../redux/addressReducer";
import { addInvoiceData } from "./../../redux/invoiceReducer";
import { FaPlusSquare } from "react-icons/fa";
import Select from "react-select";
import Loader from "react-loader-spinner";

class AddInvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectCustomer: null,
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
        this.customerHandler = this.customerHandler.bind(this);
        this.addressHandler = this.addressHandler.bind(this);
    }
    componentDidMount(){
        this.props.requestUserData();
        this.props.requestUserAddressData();
    }
    changeHandler(key, value) {
        this.setState( {
            [key]: value
        });
    }
    customerHandler(selectedOption) {
        this.setState( {
            selectCustomer: selectedOption
        })
    }
    addressHandler(selectedOption) {
        this.setState( {
            selectAddress: selectedOption
        })
    }
    addInvoice() {
        this.props.addInvoiceData(this.state.name, this.state.description)
        this.setState ({
            selectCustomer: null,
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
        
        console.log(this.state.selectCustomer)
        const { loading, usersList, addressList } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedCustomers = usersList
            .filter(item => {
                if(item.role === "Customer") {
                    return item;
                }
                return false;
            })
            .map((item) => {
                return {
                    value: item.id,
                    label: item.first_name + " " + item.last_name
                }
            })
            console.log(addressList)
            const mappedAddresses = addressList
            .filter(item => {
                if(item.user_id === this.state.selectCustomer.value) {
                    return item;
                }
                return false;
            })
            .map((item) => {
                return {
                    value: item.id,
                    label: item.street_address
                }
            })
            return(
            <div>
                <h2>
                    Add Invoice
                </h2>
                <div>
                    <label>Customer:</label>
                </div>
                <div>
                    <Select name="selectCustomer" onChange={this.customerHandler} value={this.state.selectCustomer} options={mappedCustomers} />
                </div>
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
        usersList: store.users.usersList,
        addressList: store.address.addressList,
        billingHistory: store.invoice.billingHistory,
        loading: store.users.loading
    }
  }
export default connect(mapStateToProps, { requestUserData, requestUserAddressData, addInvoiceData })(AddInvoiceForm);