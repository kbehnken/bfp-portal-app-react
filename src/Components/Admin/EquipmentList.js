import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { requestEquipmentData, removeEquipmentData } from "./../../redux/equipmentReducer";
import Loader from "react-loader-spinner"
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import UpdateEquipmentForm from "./UpdateEquipmentForm";

class EquipmentList extends Component {
    constructor (){
        super()
        this.state = {
            visibleItem: []
        }
        this.showItem = this.showItem.bind(this);
        this.hideItem = this.hideItem.bind(this);
    }
    componentDidMount(){
        this.props.requestEquipmentData();
    }
    showItem(index) {
        let visibleItem = this.state.visibleItem.slice(0);
        visibleItem[index] = true
        this.setState( {
            visibleItem: visibleItem
        })
    }
    hideItem(index) {
        let visibleItem = this.state.visibleItem.slice(0);
        visibleItem[index] = false
        this.setState( {
            visibleItem: visibleItem
        })
    }
    render() {
        const { loading, equipmentList, removeEquipmentData } = this.props
        if (loading) {
            return(
                <div>
                    <Loader type="Puff" color="#69ccda" height={100} width={100} timeout={5000} />
                </div>
            )
        } else {
            const mappedEquipment = equipmentList.map((item) => {
                return(
                    <div key={item.id}>
                        <div className="item-card">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                <FaPencilAlt className="react-icons" size={20} onClick={() => this.showItem(item.id)} />
                                <FaTrashAlt className="react-icons" size={20} onClick={() => {removeEquipmentData(item.id)}} />
                            </div>
                        </div>
                        {this.state.visibleItem[item.id]
                            ?(
                                <div className="clear-left">
                                    <UpdateEquipmentForm name={item.name} description={item.description} id={item.id} showItemFn={this.showItem} hideItemFn={this.hideItem} serviceAddressId={item.service_address_id} />
                                </div>
                            ):
                            (
                                null
                            )
                        }
                    </div>
                );
            })
            return(
                <div>
                    {mappedEquipment}
                </div>
            );
        }
    }
}
function mapStateToProps(store) {
    return {
        equipmentList: store.equipment.equipmentList,
        loading: store.equipment.loading
    }
}
export default connect(mapStateToProps, { requestEquipmentData, removeEquipmentData })(EquipmentList);