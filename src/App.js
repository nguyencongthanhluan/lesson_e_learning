import React, { Component } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { connect } from "react-redux";
import { createAction } from "./redux/actions";
import { SET_TOKEN } from "./redux/actions/type";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Wrapper from "./HOCs/wrapper";
import Signup from "./pages/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <Wrapper>
            <Signin />
          </Wrapper>
          <Wrapper>
            <Detail />
          </Wrapper>
          <Wrapper>
            <Home />
          </Wrapper>
        </div> */}

        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/detail/:courseId" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("t");
    if (token) {
      this.props.dispatch(createAction(SET_TOKEN, token));
    }
  }
}

export default connect()(App);
