import React, { Component } from "react";
import Select from "react-select";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionSelect = this.handleOptionSelect.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.state = {
      selectedOption: "",
      quantity: 1
    };
  }
  handleAddOption (event) {
    event.preventDefault();
    this.ingredientSelection(this.state.selectedOption, this.state.quantity);
  }
  handleQuantity (event) {
    this.setState({quantity: event.target.value});
    console.log(this.state.quantity);
  }

  render() {
    return (
      <div className="ingredient-container">
        <form className="ingredient-container__form" onSubmit={this.handleAddOption}>
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
                className="ingredient-container__quantity" 
                name="quantity"  
                min="1" 
                max="10" 
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

  
  // react-select user input listener
  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    return term;
  }
  // display user selection
  handleOptionSelect(selectedOption) {
    this.setState({ selectedOption });
  }
  // return selected ingredient to App
  ingredientSelection(data, num) {
    this.props.ingredientSelection(data, num);
  }

}

export default SearchBar;
