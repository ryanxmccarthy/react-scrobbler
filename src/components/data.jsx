import React, { Component } from "react";

class Data extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.band} Plays: {this.props.plays}
        </h2>
        <h2>Mayhem Plays: 0</h2>
        <h2>Emperor Plays: 0</h2>
      </div>
    );
  }
}

export default Data;
