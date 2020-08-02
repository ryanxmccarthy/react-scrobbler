import React, { Component } from "react";
import Data from "./data";
import Album from "./album";

class Albums extends Component {
  render() {
    const imgStyle = {
      height: 400,
      width: 400,
      padding: 10,
    };
    return (
      <div>
        <h2>Select an Album</h2>
        {this.props.albums.map((album, i) => (
          <Album
            album={album}
            id={i}
            key={i}
            src={require(`../assets/images/${album.img}`)}
            style={imgStyle}
            onClick={this.props.onClick}
          />
        ))}
        {this.props.albums.map((album, i) => (
          <Data band={album.band} key={i} plays={album.plays} />
        ))}
      </div>
    );
  }
}

export default Albums;
