import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { connect } from "react-redux"
import { setSessionData } from "./redux/sessionReducer";

import Header from "./Components/Header";
import Auth from "./Components/Auth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      emailAddress: "",
      password: ""
    };
    this.handleEmailAddressInput = this.handleEmailAddressInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleEmailAddressInput(value) {
    this.setState( { 
        emailAddress: value
    });
  }
  handlePasswordInput(value) {
      this.setState( {
          password: value
      });
  }
  updateUser(user) {
    this.setState({
      user
    });
  }
  login() {
    const { emailAddress, password } = this.state;
    axios
    .post("api/auth/login", {emailAddress, password})
    .then(user => {
      this.updateUser(user.data);
      this.props.setSessionData(user.data);
    }) 
    .catch(err => alert(err.response.request.response));
  }
  logout() {
    axios
    .post("api/auth/logout")
    .then(() => {
        this.updateUser({});
    })
    .catch(err => console.log(err));
  }

  render() {
    const { user, emailAddress, password } = this.state;
    return (
      <div>
        {user.emailAddress ?
          (
            <div>
              <Header logoutFn={this.logout} />
            </div>
          ) :
          (
            <div className="auth">
              <Auth user={user} emailAddress={emailAddress} password={password} handleEmailAddressInputFn={this.handleEmailAddressInput} handlePasswordInputFn={this.handlePasswordInput} updateUserFn={this.updateUser} loginFn={this.login} />
            </div>
          )
        }
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
      session: store.session
  }
}
export default connect(mapStateToProps, { setSessionData })(App);