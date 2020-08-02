import React, { Component } from "react";

class Data extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.band} Plays: {this.props.plays}
        </h3>
      </div>
    );
  }
}

export default Data;
