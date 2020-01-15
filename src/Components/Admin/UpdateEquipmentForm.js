import React, { Component } from 'react';
import { connect } from "react-redux"
import { updateEquipmentData } from "./../../redux/equipmentReducer";

class UpdateEquipmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            service_address_id: this.props.service_address_id
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    render() {
        return (
            <div className="form">
                <div>
                    <label>
                        Name:
                    </label>
                </div>
                <div>
                    <input type="text" name="name" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.name} />
                </div>
                <div>
                    <label>
                        Description:
                    </label>
                </div>
                <div>
                    <input type="text" name="description" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.description} />
                </div>
                <div>
                    <button onClick={() => {this.props.toggleVisibilityFn(this.props.id)}}>
                        Cancel
                    </button>
                    <button onClick={() => {this.props.updateEquipmentData(this.state.name, this.state.description, this.props.id, this.state.service_address_id)}}>
                        Save
                    </button>
                    {/* { Buttons.js } */}
                </div>
            </div>
        );
    }
}
function mapStateToProps(store) {
    return {
        equipmentList: store.equipment.equipmentList,
        loading: store.equipment.loading
    }
}
export default connect(mapStateToProps, { updateEquipmentData })(UpdateEquipmentForm);