import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions";

class SignOut extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <div>You have been logged out</div>;
  }
}

export default connect(null, { logout })(SignOut);
