import React, { Component } from "react";
import Select from "react-select";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.trackInput = this.trackInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      selectedOption: "",
      quantity: 1,
      userInput: ""
    };
  }
  // return selected ingredient & quantity to App
  handleAddOption(event) {
    event.preventDefault();
    this.props.ingredientSelection(
      this.state.selectedOption,
      this.state.quantity
    );
    this.setState({ selectedOption: "", quantity: 1, userInput: "" });
  }
  // set state for user quantity entered
  handleQuantity(event) {
    this.setState({ quantity: event.target.value });
  }

  // react-select user input listener
  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    this.trackInput(term);
    return term;
  }
  // set state for user selected ingredient
  handleOptionSelect(selectedOption) {
    this.setState({ selectedOption: selectedOption, userInput: "" });
  }

  // save user input to state when input blurred
  trackInput(term) {
    if (term !== "") {
      this.setState(prevState => ({ userInput: term }));
    }
  }

  // set user input as selection if no option selected
  handleBlur() {
    if (this.state.selectedOption === "")
      this.setState({
        selectedOption: {
          value: this.state.userInput,
          label: this.state.userInput
        },
        userInput: ""
      });
  }
  /* FOR TESTING
  componentDidUpdate() {
    console.log(
      "Selected Option: " + JSON.stringify(this.state.selectedOption)
    );
    console.log("term: " + JSON.stringify(this.state.term));
    console.log("userInput: " + JSON.stringify(this.state.userInput));
  }
  */
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
            onFocus={() => this.setState({ selectedOption: "" })}
            onBlur={this.handleBlur}
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
