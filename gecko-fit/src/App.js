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
      autocomplete: ""
    };
  }

  ingredientSearch(term) {
    fetch(
      //change the last of this api call after to get different results ?q=
      `https://cors-anywhere.herokuapp.com/http://api.edamam.com/auto-complete?q=${term}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          autocomplete: data
        });
        this.apiResult();
      });
  }
  // format api results for react-select
  apiResult() {
    let searchResult = [];
    let len = this.state.autocomplete.length;
    for (var i = 0; i < len; i++) {
      searchResult.push({
        value: this.state.autocomplete[i],
        label: this.state.autocomplete[i]
      });
    }
    return searchResult;
  }
  // fetch selected ingredient from searchBar
  ingredientSelection(item) {
    console.log("Selected ingredient:");
    console.log(item);
  }
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Header />
          <div className="ingredient-wrapper">
            <SearchBar
              onSearchTermChange={term => this.ingredientSearch(term)}
              searchResult={this.apiResult()}
              ingredientSelection={this.ingredientSelection}
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
