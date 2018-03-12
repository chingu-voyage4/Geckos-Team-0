import React, { Component } from "react";

class Ingredient extends Component {
  handleRemoveIngredient (ingredient) {

    //this.props.removeIngredient(id);
    console.log(`From handleRemoveIngredient ${ingredient} `);
  }
  render() {
    return (        
          <p>
            Ingredient: {this.props.ingredientText}
            <button onClick={this.handleRemoveIngredient}>X</button>
          </p>
    );
  }
}

export default Ingredient;