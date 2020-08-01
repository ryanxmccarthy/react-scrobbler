import React, { Component } from "react";

class Data extends Component {
  render() {
    return (
      <div>
        <h3 key={this.props.key}>
          {this.props.band} Plays: {this.props.plays}
        </h3>
      </div>
    );
  }
}

export default Data;
