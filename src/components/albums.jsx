import React, { Component } from "react";
import Album from "./album";

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
        {console.log(this.props.albums)}
        {/* <img
          src={require("../assets/images/th.jpg")}
          // onClick={handleClick(this.id)}
          style={imgStyle}
          key={1}
        />
        <img
          src={require("../assets/images/m.jpg")}
          // onClick={handleClick}
          style={imgStyle}
          key={2}
        />
        <img
          src={require("../assets/images/e.jpg")}
          // onClick={handleClick}
          style={imgStyle}
          key={3}
        /> */}
      </div>
    );
  }
}

export default Body;
