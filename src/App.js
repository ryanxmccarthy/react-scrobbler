import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";

class App extends Component {
  handleScrobble = (album) => {
    console.log("i get here");
    const albums = [...this.state.albums];
    const index = albums.indexOf(album);
    albums[index] = { ...album };
    albums[index].value++;
    this.setState({ albums });
  };

  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{"body { background-color: black; color: white }"}</style>
        </Helmet>
        <Header />
        <Albums onClick={this.handleScrobble} />
      </div>
    );
  }
}

export default App;
