import React, { Component } from "react";

class Album extends Component {
  render() {
    return (
      <div>
        <img onClick={this.props.handleClick()}></img>
      </div>
    );
  }
}

export default Album;
