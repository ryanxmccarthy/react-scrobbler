import React, { Component } from "react";

class Body extends Component {
  state = {
    albums: [
      { id: 1, img: "th.jpg", plays: 0 },
      { id: 2, img: "m.jpg", plays: 0 },
      { id: 3, img: "e.jpg", plays: 0 },
    ],
  };
  render() {
    const imgStyle = {
      height: 400,
      width: 400,
      padding: 10,
    };
    return (
      <div>
        <h1>Select an Album</h1>
        {this.state.albums.map((album, i) => (
          <img
            style={imgStyle}
            key={i}
            alt=""
            src={require(`../assets/images/${album.img}`)}
            onClick={(props) => props.update(album.plays)}
          ></img>
        ))}
      </div>
    );
  }
}

export default Body;
