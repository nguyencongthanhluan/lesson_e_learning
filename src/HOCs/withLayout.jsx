import React, { Component } from "react";
import Header from "../components/Header";

//HOCs
export const withLayout = (Comp) => {
  //Layout
  return class extends Component {
    render() {
      return (
        <div>
          <Header />
          <div style={{ background: "yellow" }}>
            <Comp {...this.props} />
          </div>

          <div style={{ background: "black", height: 50, color: "white" }}>
            FOOTER
          </div>
        </div>
      );
    }
  };
};
