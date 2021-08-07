import React, { Component } from 'react';
import { connect } from "react-redux";
import { addEquipmentData } from "./../../redux/equipmentReducer";

class AddEquipmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.addEquipment = this.addEquipment.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    addEquipment() {
        this.props.addEquipmentData(this.state.name, this.state.description)
        this.setState ({
            name: "",
            description: ""
        });
    }
    render() {
        return (
            <div classname="form">
                <div>
                    <label>Name:</label>
                </div>
                <div>
                    <input type="text" name="name" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.name} />
                </div>
                <div>
                    <label>Description:</label>
                </div>
                <div>
                    <input type="text" name="description" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.description} />
                </div>
                <div className="button-container">
                    <button type="button" onClick={() => {this.props.hideSectionFn(0)}}>
                        Cancel
                    </button>
                    <button type="button" onClick={() => this.addEquipment()}>
                        Add
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
export default connect(mapStateToProps, { addEquipmentData })(AddEquipmentForm);