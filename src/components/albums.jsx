import React, { Component } from "react";

class Body extends Component {
  render() {
    const imgStyle = {
      height: 400,
      width: 400,
      padding: 10,
    };
    return (
      <div>
        <h1>Select an Album</h1>
        <img src={require("../assets/images/th.jpg")} style={imgStyle} alt="" />
        <img src={require("../assets/images/m.jpg")} style={imgStyle} alt="" />
      </div>
    );
  }
}

export default Body;
