import React, { Component } from "react";
import Select from "react-select";
import "./App.css";
import "react-select/dist/react-select.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
          <Header />
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App__header">
        <h1 className="App__title">Gecko Fit</h1>
      </header>
    );
  }
}

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      autocomplete: "",
      options: []
    };
  }
  componentDidMount() {
    fetch(
      //change the last of this api call after to get different results ?q=
      `https://cors-anywhere.herokuapp.com/http://api.edamam.com/auto-complete?q=ap`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          autocomplete: data
        });
        console.log(this.state.autocomplete);
        console.log(this.apiResult());
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
  // Display user search input
  handleInputChange = selectedOption => {
    this.setState({ selectedOption });
    // For testing
    if (selectedOption) {
      console.log(`Selected: ${this.state.selectedOption}`);
    }
  };

  render() {
    return (
      <div className="ingredient-wrapper">
        <div className="ingredient-container">
          <form className="ingredient-container__form">
            <Select
              type="text"
              name="ingredient"
              className="ingredient-container__field"
              placeholder="Type in ingredient to get nutrition info"
              value={this.state.value}
              onChange={this.handleInputChange}
              options={this.apiResult()}
            />
            <input
              type="submit"
              value="Add"
              className="ingredient-container__submit"
            />
          </form>
        </div>
        <div></div>
        <div className="ingredient-container__list" />
        <div className="ingredient-container__analyze">
          <input type="button" value="Analyze Recipe" />
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__chingu-link">
          Created in <a href="https://chingu.io/">Chingu Voyage-4</a>
        </p>
        <p className="footer__github-link">
          <a href="https://github.com/chingu-voyage4/Geckos-Team-0">
            Link to Github
          </a>
        </p>
      </footer>
    );
  }
}

export default App;
