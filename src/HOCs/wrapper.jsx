import React, { Component } from "react";
import Header from "../components/Header";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ background: "yellow" }}>{this.props.children}</div>

        <div style={{ background: "black", height: 50, color: "white" }}>
          FOOTER
        </div>
      </div>
    );
  }
}

export default Wrapper;
