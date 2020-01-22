import React, { Component } from 'react';
import { connect } from "react-redux"
import { addServiceData } from "./../../redux/serviceReducer";

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
            <form>
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
                    <button onClick={() => {this.props.hideSectionFn(0)}}>
                        Cancel
                    </button>
                    <button onClick={() => this.addService()}>
                        Add
                    </button>
                    {/* { Buttons.js } */}
                </div>
            </form>
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