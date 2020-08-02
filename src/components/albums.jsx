import React, { Component } from "react";
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
        {this.props.albums.map((album) => (
          <Album
            album={album}
            key={album.id}
            src={require(`../assets/images/${album.img}`)}
            style={imgStyle}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}

export default Albums;
