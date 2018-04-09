import React, { Component } from "react";
import Select from "react-select";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.state = {
      selectedOption: "",
      quantity: 1
    };
  }
  // return selected ingredient & quantity to App  /  reset SearchBar state
  handleAddOption(event) {
    event.preventDefault();
    this.props.ingredientSelection(
      this.state.selectedOption,
      this.state.quantity
    );
    this.setState({ selectedOption: "", quantity: 1 });
  }
  // set state for user quantity entered
  handleQuantity(event) {
    this.setState({ quantity: event.target.value });
    console.log(this.state.quantity);
  }

  // react-select user input listener
  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);

    if (term !== "") {
      this.setState({ selectedOption: "" });
    }
    return term;
  }
  // set state for user selected ingredient
  handleOptionSelect(selectedOption) {
    this.setState({ selectedOption });
  }
  handleClear() {
    this.setState({ selectedOption: "" });
  }

  componentDidUpdate() {
    console.log(
      "Selected Option: " + JSON.stringify(this.state.selectedOption)
    );
    console.log("term: " + JSON.stringify(this.state.term));
  }

  render() {
    return (
      <div className="ingredient-container">
        <form
          className="ingredient-container__form"
          onSubmit={this.handleAddOption}
        >
          <Select
            type="text"
            name="ingredient"
            className="ingredient-container__field"
            placeholder="Type in ingredient to get nutrition info"
            value={this.state.selectedOption}
            onFocus={this.handleClear}
            onChange={this.handleOptionSelect} // sets option state (not visible)
            onInputChange={this.handleInputChange} // listener
            options={this.props.apiResult}
          />
          <input
            className="ingredient-container__quantity"
            name="quantity"
            min="1"
            max="24"
            type="number"
            value={this.state.quantity}
            onChange={this.handleQuantity}
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
