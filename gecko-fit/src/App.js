import React, { Component } from "react";
import Select from "react-select";
import "./App.css";
import "react-select/dist/react-select.css";
import Header from "./components/header";
import SearchBar from "./components/searchBar";

import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Header />
          <div className="ingredient-wrapper">
          <SearchBar />
          <div className="ingredient-container__list" />>
          <div className="ingredient-container__analyze">
            <input type="button" value="Analyze Recipe" />
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
