import { Box, Button, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import React, { Component } from "react";
import { signIn } from "../../redux/actions/auth";
import Header from "../../components/Header";

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      signIn(this.state.credentials, () => {
        this.props.history.replace("/");
        // this.props.history.push("/");
      })
    );
  };

  render() {
    return (
      <>
        <Header />
        <div>
          <Box textAlign="center">
            <Typography component="h1" variant="h2">
              Sign in
            </Typography>
          </Box>
          <Box
            onSubmit={this.handleSubmit}
            component="form"
            width="50%"
            mx="auto"
          >
            <Box mb={3}>
              <TextField
                onChange={this.handleChange}
                name="taiKhoan"
                fullWidth
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Box>

            <Box mb={3}>
              <TextField
                type="password"
                onChange={this.handleChange}
                name="matKhau"
                fullWidth
                id="outlined-basic"
                label="password"
                variant="outlined"
              />
            </Box>

            <Box textAlign="center">
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Box>
          </Box>
        </div>
      </>
    );
  }
}

export default connect()(Signin);
