import React, { Component } from "react";
import "./App.css";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";
import Data from "./components/data.jsx";

//main app component
class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: JSON.parse(localStorage.getItem("albums")) || [
        { id: 1, band: "Darkthrone", img: "th.jpg", plays: 0 },
        { id: 2, band: "Mayhem", img: "m.jpg", plays: 2 },
        { id: 3, band: "Emperor", img: "e.jpg", plays: 1 },
        { id: 4, band: "Immortal", img: "i.jpg", plays: 0 },
        { id: 5, band: "Marduk", img: "marduk.jpg", plays: 1 },
      ],
    };
  }

  handleScrobble = (album) => {
    const albums = [...this.state.albums];
    const index = albums.indexOf(album);
    albums[index] = { ...album };
    albums[index].plays++;
    this.setState({ albums }, () => {
      localStorage.setItem("albums", JSON.stringify(this.state.albums));
    });
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
