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
            visible: []
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    componentDidMount(){
        this.props.requestEquipmentData();
    }
    toggleVisibility(index) {
        let visible = this.state.visible.slice(0);
        visible[index] = !visible[index]
        this.setState( {
            visible: visible
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
                                <FaPencilAlt className="react-icons" size={20} onClick={() => this.toggleVisibility(item.id)}/>
                                <FaTrashAlt className="react-icons" size={20} onClick={() => {removeEquipmentData(item.id)}} />
                            </div>
                        </div>
                        {this.state.visible[item.id]
                        ?
                        (<div className="clear-left">
                            <UpdateEquipmentForm name={item.name} description={item.description} id={item.id} toggleVisibilityFn={this.toggleVisibility} serviceAddressId={item.service_address_id} />
                        </div>)
                        :
                        (null)
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