import React, { Component } from 'react';
import { connect } from "react-redux"
import { requestUserData } from "./../../redux/userReducer";
import { FaMinus } from "react-icons/fa";
import Loader from 'react-loader-spinner';

class UpdateInvoiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: "",
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
    }
    componentDidMount(){
        this.props.requestUserData();
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    render() {
        const { loading, usersList } = this.props
        if (loading) {
            return(
                <div>
                    <Loader
                        type="Puff"
                        color="#69ccda"
                        height={100}
                        width={100}
                        timeout={5000}
                    />
                </div>
            )
        } else {
            const mappedUsers = usersList.map((item) => {
        return (
            <div key={item.id}>
               <div>
                    <label>Customer:</label>
                </div>
                <div>
                    <select name="customer" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.customer}>
                        <option>{item.first_name} {item.last_name}</option>
                    </select>
                </div>
                <div>
                    <label>Update or Delete Invoice</label>
                </div>
                <div>
                    <label>Service Start Date:</label>
                </div>
                <div>
                    <input type="date" name="serviceStart" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceStart} placeholder="Service Start" />
                </div>
                <div>
                    <label>Service End Date:</label>
                </div>
                <div>
                    <input type="date" name="serviceEnd" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceEnd} placeholder="Service End" />
                </div>
                <div>
                    <label>Invoice Number:</label>
                </div>
                <div>
                    <input type="number" name="invoiceNumber" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceNumber} placeholder="Invoice Number" />
                </div>
                <div>
                    <label>Invoice Amount:</label>
                </div>
                <div>
                    <input type="number" name="invoiceAmount" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceAmount} placeholder="Invoice Amount" />
                </div>
                <div>
                    <label>Payment Type:</label>
                </div>
                <div>
                    <input type="date" name="paymentType" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.paymentType} placeholder="Payment Type" />
                </div>
                <div>
                    <label>Payment Amount:</label>
                </div>
                <div>
                    <input type="number" name="paymentAmount" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.paymentAmount} placeholder="Payment Amount" />
                </div>
                <div>
                    <label>Invoice Balance:</label>
                </div>
                <div>
                    <input type="number" name="invoiceBalance" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceBalance} placeholder="Invoice Balance" />
                </div>
                <div>
                    <label>Invoice Status:</label>
                </div>
                <div>
                    <input type="number" name="invoiceStatus" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.invoiceStatus} placeholder="Invoice Status" />
                </div>
                <div>
                    <FaMinus size={20} />
                </div>
            </div>
        )
        })
        return(
            <div>
                {mappedUsers}
            </div>
        );
        }
    }
}
function mapStateToProps(store) {
    return {
        usersList: store.users.usersList,
        loading: store.users.loading
    }
  }
export default connect(mapStateToProps, { requestUserData })(UpdateInvoiceForm);