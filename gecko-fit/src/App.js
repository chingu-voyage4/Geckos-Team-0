import React, { Component } from "react";
import Select from "react-select";
import "./App.css";
import "react-select/dist/react-select.css";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autocomplete: "",
      options: []
    };
  }

  ingredientSearch(term) {
    console.log("API search term: " + term);
    fetch(
      //change the last of this api call after to get different results ?q=
      `https://cors-anywhere.herokuapp.com/http://api.edamam.com/auto-complete?q=${term}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          autocomplete: data
        });
        console.log("API return: " + this.state.autocomplete);
      });
  }
  // format api results for react-select
  apiResult() {
    let arr = [];
    let len = this.state.autocomplete.length;
    for (var i = 0; i < len; i++) {
      arr.push({
        value: this.state.autocomplete[i],
        label: this.state.autocomplete[i]
      });
    }
    return arr;
  }
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Header />
          <div className="ingredient-wrapper">
            <SearchBar
              onSearchTermChange={term => this.ingredientSearch(term)}
            />
            <div className="ingredient-container__list" />
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
