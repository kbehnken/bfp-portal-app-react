import React, { Component } from 'react';
import { connect } from "react-redux"
import { updateServiceData } from "./../../redux/serviceReducer";

class UpdateServiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    render() {
        return(
            <div className="form">
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
                    <button onClick={() => {this.props.toggleVisibilityFn(this.props.id)}}>
                        Cancel
                    </button>
                    <button onClick={() => {this.props.updateServiceData(this.state.name, this.state.description, this.props.id)}}>
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
        serviceList: store.service.serviceList,
        loading: store.service.loading
    }
}
export default connect(mapStateToProps, { updateServiceData })(UpdateServiceForm);