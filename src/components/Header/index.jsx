import { AppBar, Button, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
          {this.props.isLogin ? (
            <Button color="secondary">Hello, Homie</Button>
          ) : (
            <>
              <Link to="/signin">
                <Button color="secondary">Login</Button>
              </Link>
              <Button color="secondary">Signup</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: !!state.credentials.token,
});

export default connect(mapStateToProps)(Header);
