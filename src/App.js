import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";
import Data from "./components/data.jsx";

class App extends Component {
  handleClick = (album) => {
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
        <Albums onClick={this.handleClick} />
        <Data />
      </div>
    );
  }
}

export default App;
