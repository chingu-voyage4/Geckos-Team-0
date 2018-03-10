import React, { Component } from "react";
import Select from "react-select";


class SearchBar extends Component {
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
      );
    }
  }

  export default SearchBar;