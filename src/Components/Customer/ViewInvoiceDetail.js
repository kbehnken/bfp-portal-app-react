import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestInvoiceData } from "./../../redux/invoiceReducer";
import { FaEye } from "react-icons/fa";
// import Loader from "react-loader-spinner";

import CustomerNav from "./CustomerNav";

class ViewInvoiceDetail extends Component {
    componentDidMount(){
        this.props.requestInvoiceData();
    }
    render() {
        let invoiceTotal = 0;
        let paymentTotal = 0;
        const { invoiceList } = this.props
        const mappedInvoices = invoiceList.map((item) => {
            invoiceTotal += item.invoice_amount;
            paymentTotal += item.payment_amount;
            return (
                <tr key={item.invoice_id}>
                    <td>
                        {item.service_start} - {item.service_end}
                    </td>
                    <td>
                        {item.invoice_number}
                    </td>
                    <td>
                        ${item.invoice_amount}
                    </td>
                    <td>
                        {item.payment_date}
                    </td>
                    <td>
                        {item.payment_type}
                    </td>
                    <td>
                        ${item.payment_amount}
                    </td>
                    <td>
                        ${item.invoice_amount - item.payment_amount}
                    </td>
                    <td>
                        {item.invoice_amount - item.payment_amount === 0
                        ?(
                            <span>
                                Paid
                            </span>
                        ):
                        (
                            <span>
                                Unpaid
                            </span>
                        )}
                    </td>
                    <td>
                        {item.invoice_url 
                        ?(
                            <a href={item.invoice_url} target="_blank" rel="noopener noreferrer">
                                <FaEye className="react-icons" size={20} />
                            </a>
                        ):
                        (
                            null
                        )}
                    </td>
                </tr>
            )
        })
        return(
            <div>
                <div>
                    <CustomerNav />
                </div>
                <div className="list">
                    <h1>
                        Billing &amp; Payment History
                    </h1>
                    <div className="table-container">
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    Service<br />
                                    Period
                                </th>
                                <th>
                                    Invoice<br />
                                    Number
                                </th>
                                <th>
                                    Invoice<br />
                                    Amount
                                </th>
                                <th>
                                    Payment<br />
                                    Date
                                </th>
                                <th>
                                    Payment<br />
                                    Type
                                </th>
                                <th>
                                    Payment<br />
                                    Amount
                                </th>
                                <th>
                                    Invoice<br />
                                    Balance
                                </th>
                                <th>
                                    Invoice<br />
                                    Status
                                </th>
                                <th>
                                    View<br />
                                    Invoice
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {mappedInvoices}
                            </tbody>
                        </table>
                        <div className="total-container">
                            Total Amount Due: ${invoiceTotal - paymentTotal}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        invoiceList: store.invoice.invoiceList,
        loading: store.invoice.loading
    }
}
export default connect(mapStateToProps, { requestInvoiceData })(ViewInvoiceDetail);