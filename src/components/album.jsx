import React, { Component } from "react";
import Albums from "./albums";

class Album extends Component {
  render() {
    return (
      <img
        alt={this.props.band}
        onClick={this.props.onClick}
        src={this.props.src}
        style={this.props.style}
      ></img>
    );
  }
}

export default Album;
