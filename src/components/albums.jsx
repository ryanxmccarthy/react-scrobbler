import React, { Component } from "react";
import Data from "./data";

class Albums extends Component {
  state = {
    albums: [
      { id: 1, band: "Darkthrone", img: "th.jpg", plays: 0 },
      { id: 2, band: "Mayhem", img: "m.jpg", plays: 2 },
      { id: 3, band: "Emperor", img: "e.jpg", plays: 1 },
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
        <h2>Select an Album</h2>
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
        {this.state.albums.map((album, i) => (
          <Data band={album.band} key={i} plays={album.plays} />
        ))}
      </div>
    );
  }
}

export default Albums;
