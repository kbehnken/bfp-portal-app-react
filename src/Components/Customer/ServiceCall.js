import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestCallData } from "../../redux/callReducer";

class CallList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service_date: this.props.call.service_date,
            salt: this.props.call.salt,
            phosphates: this.props.call.phosphates,
            tds: this.props.call.tds,
            filter_psi: this.props.call.filter_psi,
            chlorine: this.props.call.chlorine,
            ph: this.props.call.ph,
            alkalinity: this.props.call.alkalinity,
            cya: this.props.call.cya,
            trichlor_shock: this.props.call.trichlor_shock,
            soda_ash: this.props.call.soda_ash,
            sodium_bicarbonate: this.props.call.sodium_bicarbonate,
            tabs: this.props.call.tabs,
            granular_trichlor: this.props.call.granular_trichlor,
            phosphate_remover: this.props.call.phosphate_remover,
            user_id: this.props.call.user_id,
            service_address_id: this.props.call.service_address_id,
            technician: this.props.call.technician
        }
    }
    render() {
        return(
            <form>
                <div>
                    <label>Service Date: </label>{this.state.service_date}
                </div>
                <div>
                    <label>Technician: </label>{this.state.technician}
                </div>
                <h2>
                    Chemical Readings
                </h2>
                <div className="chemicals">
                        <label>Chlorine: </label>{this.state.chlorine} ppm
                    </div>
                    <div>
                        <label>Salt: </label>{this.state.salt} ppm
                    </div>
                    <div className="chemicals">
                        <label>pH: </label>{this.state.ph} ppm
                    </div>
                    <div>
                        <label>Phosphates: </label>{this.state.phosphates} ppb
                    </div>
                    <div className="chemicals">
                        <label>Alkalinity: </label>{this.state.alkalinity} ppm
                    </div>
                    <div>
                        <label>TDS: </label>{this.state.tds}
                    </div>
                    <div className="chemicals">
                        <label>CYA: </label>{this.state.cya} ppm
                    </div>
                    <div>
                        <label>Filter PSI: </label>{this.state.filter_psi}
                    </div>
                    <h2>
                        Chemicals Added
                    </h2>
                    <div className="chemicals">
                        <label>Trichlor Shock: </label>{this.state.trichlor_shock} bag(s)
                    </div>
                    <div>
                        <label>Tabs: </label>{this.state.tabs} tab(s)
                    </div>
                    <div className="chemicals">
                        <label>Soda Ash: </label>{this.state.soda_ash} scoop(s)
                    </div>
                    <div>
                        <label>Granular Trichlor: </label>{this.state.granular_trichlor} scoop(s)
                    </div>
                    <div className="chemicals">
                        <label>Sodium Bicarbonate: </label>{this.state.sodium_bicarbonate} scoop(s)
                    </div>
                    <div>
                        <label>Phosphate Remover: </label>{this.state.phosphate_remover} ounce(s)
                    </div>
                    {/* <div>
                        <label>Muriatic Acid</label>
                    </div>
                    <div>
                        {this.state.muriaticAcid}
                    </div>
                    <div>
                        <label>Sodium Thiosulfate</label>
                    </div>
                    <div>
                        {this.state.sodiumThiosulfate}
                    </div>
                    <div>
                        <label>Stabilizer</label>
                    </div>
                    <div>
                        {this.state.stabilizer}
                    </div>
                    <div>
                        <label>Green to Clean:</label>
                    </div>
                    <div>
                        {this.state.greenToClean}
                    </div>
                    <div>
                        <label>DE:</label>
                    </div>
                    <div>
                        {this.state.de}
                    </div> */}
                <h2>
                    Before Photos
                </h2>
                <div className="call-photos">
                {/* {this.state.beforePhotos}  */}
                    <img src="http://images.beachfamilypools.com/customer_pool1.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool2.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool3.jpg" width="25%" alt="swimming pool before cleaning service" />
                </div>
                <h2>
                    After Photos
                </h2>
                <div className="call-photos">
                {/* {this.state.afterPhotos}  */}
                    <img src="http://images.beachfamilypools.com/customer_pool1.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool2.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool3.jpg" width="25%" alt="swimming pool before cleaning service" />
                </div>
                <div className="call-photos">
                {/* {this.state.beforePhotos}  */}
                    <img src="http://images.beachfamilypools.com/customer_pool1.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool2.jpg" width="25%" alt="swimming pool before cleaning service" />
                    <img src="http://images.beachfamilypools.com/customer_pool3.jpg" width="25%" alt="swimming pool before cleaning service" />
                </div>
            </form>
        );
    }
}
function mapStateToProps(store) {
    return {
        callList: store.call.callList,
        loading: store.call.loading
    }
}
export default connect(mapStateToProps, { requestCallData })(CallList);