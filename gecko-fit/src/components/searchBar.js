import React, { Component } from "react";
import Select from "react-select";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      selectedOption: "",
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
            //value={this.state.term}
            onChange={this.handleOptionSelect}
            onInputChange={this.handleInputChange}
            //options={this.props.options}
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

  // Display user search input
  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    return term;
  }
  handleOptionSelect(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
}

export default SearchBar;
