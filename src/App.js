import React, { Component } from "react";
import "./App.css";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";
import Data from "./components/data.jsx";

class App extends Component {
  state = {
    albums: [
      { id: 1, band: "Darkthrone", img: "th.jpg", plays: 0 },
      { id: 2, band: "Mayhem", img: "m.jpg", plays: 2 },
      { id: 3, band: "Emperor", img: "e.jpg", plays: 1 },
    ],
  };

  handleScrobble = (album) => {
    const albums = [...this.state.albums];
    const index = albums.indexOf(album);
    albums[index] = { ...album };
    albums[index].plays++;
    this.setState({ albums });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Albums albums={this.state.albums} onClick={this.handleScrobble} />
        {this.state.albums.map((album) => (
          <Data band={album.band} key={album.id} plays={album.plays} />
        ))}
      </div>
    );
  }
}

export default App;
