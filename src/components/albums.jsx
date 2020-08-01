import React, { Component } from "react";
import Data from "./data";

class Albums extends Component {
  state = {
    albums: [
      { id: 1, band: "Darkthrone", img: "th.jpg", plays: 0 },
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
            band={this.band}
            key={i}
            alt=""
            src={require(`../assets/images/${album.img}`)}
            // onClick={() => {
            //   console.log(this.state.albums[album.id - 1].band);
            //   this.setState({
            //     plays: this.state.albums[album.id - 1].plays + 1,
            //   });
            // }}
            onClick={() => console.log(this.band)}
          ></img>
        ))}
        <Data
          band={this.state.albums[0].band}
          plays={this.state.albums[0].plays}
        />
      </div>
    );
  }
}

export default Albums;
