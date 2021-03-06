import React, { Component } from "react";

class Album extends Component {
  render() {
    return (
      <img
        alt={this.props.band}
        onClick={() => this.props.onClick(this.props.album)}
        src={this.props.src}
        style={this.props.style}
      ></img>
    );
  }
}

export default Album;
