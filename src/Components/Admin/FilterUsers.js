import React, { Component } from 'react';

export default class FilterUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterUsers: "",
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }
    changeHandler(key, value) {
        this.setState({
            [key]: value
        });
    }
    filterInput(event) {
        this.setState( {
            filterUsers: event.target.value
        })
    }
    render() {
        return (
            <div className="filter">
                <div>
                    <input type="text" name="filterUsers" placeholder="Filter by name" value={this.filterUsers} onChange={this.filterInput} />
                </div>
            </div>
        )
    }
}