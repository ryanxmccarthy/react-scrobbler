import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

//components
import Header from "./components/header.jsx";
import Albums from "./components/albums.jsx";

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: black; color: white }"}</style>
      </Helmet>
      <Header />
      <Albums />
    </div>
  );
}

export default App;
