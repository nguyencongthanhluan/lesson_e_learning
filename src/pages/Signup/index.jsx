import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withLayout } from "../../HOCs/withLayout";

class Signup extends Component {
  render() {
    return (
      <div>
        Signupasdsads
        {this.props.token}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.credentials.token,
  };
};

export default withStyles()(
  withRouter(connect(mapStateToProps)(withLayout(Signup)))
);
