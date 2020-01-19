import React from "react";
import { connect } from "react-redux"
import { setSessionData } from "./../redux/sessionReducer";

function Welcome(props) {
    const { firstName, lastName } = props.session
    return (
        <div className="welcome">
            <h1>
                Welcome, {firstName} {lastName}
            </h1>
        </div>
    )
}
function mapStateToProps(store) {
    return {
        session: store.session
    }
  }
export default connect(mapStateToProps, { setSessionData })(Welcome);