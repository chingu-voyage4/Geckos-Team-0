import React, { Component } from "react";
import Select from "react-select";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.state = {
      selectedOption: ""
    };
  }

  render() {
    return (
      <div className="ingredient-container">
        <form className="ingredient-container__form">
          <Select
            type="text"
            name="ingredient"
            className="ingredient-container__field"
            placeholder="Type in ingredient to get nutrition info"
            value={this.state.selectedOption}
            onChange={this.handleOptionSelect}
            onInputChange={this.handleInputChange}
            options={this.props.searchResult}
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

  // react-select user input listener
  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    return term;
  }
  // display user selection
  handleOptionSelect(selectedOption) {
    this.setState({ selectedOption });
    this.ingredientSelection(selectedOption);
  }
  // retrun selected ingredient to App
  ingredientSelection(data) {
    this.props.ingredientSelection(data);
  }

}

export default SearchBar;
