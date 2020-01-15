import React, { Component } from 'react';
import { connect } from "react-redux"
import { addServiceData } from "./../../redux/serviceReducer";
import { FaPlusSquare } from "react-icons/fa";

class AddServiceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.addService = this.addService.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    addService() {
        this.props.addServiceData(this.state.name, this.state.description)
        this.setState ({
            name: "",
            description: ""
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
                <div>
                    <FaPlusSquare className="react-icons" size={75} onClick={() => this.addService()} />
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
export default connect(mapStateToProps, { addServiceData })(AddServiceForm);