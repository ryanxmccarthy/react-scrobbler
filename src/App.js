import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";

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
    console.log(albums);
    // const index = albums.indexOf(album);
    // console.log(index);
    // albums[1] = { ...album };
    // albums[1].value++;
    // this.setState({ albums });
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{"body { background-color: black; color: white }"}</style>
        </Helmet>
        <Header />
        <Albums onClick={this.handleScrobble} albums={this.state.albums} />
      </div>
    );
  }
}

export default App;
