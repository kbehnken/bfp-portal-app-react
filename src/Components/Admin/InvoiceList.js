import React, { Component } from "react";
import { connect } from "react-redux"
import { requestInvoiceData, removeInvoiceData } from "../../redux/invoiceReducer";
import Loader from "react-loader-spinner";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

class InvoiceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: []
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    componentDidMount(){
        this.props.requestInvoiceData();
    }
    toggleVisibility(index) {
        let visible = this.state.visible.slice(0);
        visible[index] = !visible[index]
        this.setState( {
            visible: visible
        })
    }
    render() {
        const { loading, invoiceList } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedInvoices = invoiceList.map((item) => {
                return(
                    <div key={item.id}>
                        <div>
                            {item.service_start} {item.service_end} {item.invoice_number} {item.invoice_amount}
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
                    {mappedInvoices}
                </div>
            );
        }
    }
}
function mapStateToProps(store) {
    return {
        invoiceList: store.invoice.invoiceList,
        loading: store.invoice.loading
    }
}
export default connect(mapStateToProps, { requestInvoiceData, removeInvoiceData })(InvoiceList);