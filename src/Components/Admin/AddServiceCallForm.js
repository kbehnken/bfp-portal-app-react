import React, { Component } from 'react';

// import ServiceAddressesForm from './ServiceAddressesForm';
// import Buttons from './../Buttons';

export default class UpdateUserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: "",
            serviceAddress: "",
            serviceDate: "",
            serviceType: "",
            technician: "",
            chlorine: "",
            ph: "",
            alkalinity: "",
            cya: "",
            salt: "",
            phosphates: "",
            tds: "",
            filterPsi: "",
            trichlorShock: "",
            sodaAsh: "",
            sodiumBicarbonate: "",
            tabs: "",
            granularTrichlor: "",
            phosphateRemover: "",
            muriaticAcid: "",
            sodiumThiosulfate: "",
            stabilizer: "",
            greenToClean: "",
            de: "",
            beforePhotos: [],
            afterPhotos: []
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
                <h1>
                    Add Service Call
                </h1>
                <div>
                    <label>Customer:</label>
                </div>
                <div>
                    <select name="customer" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.customer}>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Service Address:</label>
                </div>
                <div>
                    <select name="serviceAddress" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceAddress}>
                        <option></option>
                    </select>
                </div>
                <div>
                    <label>Service Date:</label>
                </div>
                <div>
                    <input type="date" name="serviceDate" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.serviceDate} />
                </div>
                <div>
                    <label>Technician:</label>
                </div>
                <div>
                    <select name="technician" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.technician}>
                        <option></option>
                    </select>
                </div>
                <h2>
                    Chemical Readings
                </h2>
                <div>
                    <label>Chlorine:</label>
                </div>
                <div>
                    <input type="text" name="chlorine" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.chlorine} />
                </div>
                <div>
                    <label>pH</label>
                </div>
                <div>
                    <input type="text" name="ph" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.ph} />
                </div>
                <div>
                    <label>Alkalinity</label>
                </div>
                <div>
                    <input type="text" name="alkalinity" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.alkalinity} />
                </div>
                <div>
                    <label>CYA</label>
                </div>
                <div>
                    <input type="text" name="cya" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.cya} />
                </div>
                <div>
                    <label>Salt</label>
                </div>
                <div>
                    <input type="text" name="salt" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.salt} />
                </div>
                <div>
                    <label>Phosphates</label>
                </div>
                <div>
                    <input type="text" name="phosphates" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.phosphates} />
                </div>
                <div>
                    <label>TDS</label>
                </div>
                <div>
                    <input type="text" name="tds" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.tds} />
                </div>
                <div>
                    <label>Filter PSI</label>
                </div>
                <div>
                    <input type="text" name="filterPsi" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.filterPsi} />
                </div>
                <h2>
                    Chemicals Added
                </h2>
                <div>
                    <label>Trichlor Shock</label>
                </div>
                <div>
                    <input type="text" name="trichlorShock" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.trichlorShock} />
                </div>
                <div>
                    <label>Soda Ash</label>
                </div>
                <div>
                    <input type="text" name="sodaAsh" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.sodaAsh} />
                </div>
                <div>
                    <label>Sodium Bicarbonate</label>
                </div>
                <div>
                    <input type="text" name="sodiumBicarbonate" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.sodiumBicarbonate} />
                </div>
                <div>
                    <label>Tabs</label>
                </div>
                <div>
                    <input type="text" name="tabs" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.tabs} />
                </div>
                <div>
                    <label>Granular Trichlor</label>
                </div>
                <div>
                    <input type="text" name="granularTrichlor" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.granularTrichlor} />
                </div>
                <div>
                    <label>Phosphate Remover</label>
                </div>
                <div>
                    <input type="text" name="phosphateRemover" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.phosphateRemover} />
                </div>
                <div>
                    <label>Muriatic Acid</label>
                </div>
                <div>
                    <input type="text" name="muriaticAcid" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.muriaticAcid} />
                </div>
                <div>
                    <label>Sodium Thiosulfate</label>
                </div>
                <div>
                    <input type="text" name="sodiumThiosulfate" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.sodiumThiosulfate} />
                </div>
                <div>
                    <label>Stabilizer</label>
                </div>
                <div>
                    <input type="text" name="stabilizer" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.stabilizer} />
                </div>
                <div>
                    <label>Green to Clean:</label>
                </div>
                <div>
                    <input type="text" name="greenToClean" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.greenToClean} />
                </div>
                <div>
                    <label>DE:</label>
                </div>
                <div>
                    <input type="text" name="de" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.de} />
                </div>
                <h2>
                    Before Photos
                </h2>
                <div>
                    <input type="text" name="beforePhotos" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.beforePhotos} />
                </div>
                <div>
                    {/* < Buttons /> */}
                </div>
                <h2>
                    After Photos
                </h2>
                <div>
                    <input type="text" name="afterPhotos" onChange={event => this.changeHandler(event.target.name, event.target.value)} value={this.state.afterPhotos} />
                </div>
                <div>
                    {/* < Buttons /> */}
                </div>
                <div>
                    {/* < Buttons /> */}
                </div>
            </div>
        )
    }
}