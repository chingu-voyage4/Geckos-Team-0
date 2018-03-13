import React, { Component } from "react";

class Ingredient extends Component {
  render() {
    return (        
          <table className="ingredient-item">
            <tbody>
              <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Calories</th>
                <th>Fat</th>
                <th>Carbohydrates</th>
                <th>Cholesterol</th>
                <th>Proteins</th>
                <th>Sugars</th>
                <th>Sodium</th>
              </tr>
              <tr>
                <td>{this.props.ingredientText}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><button onClick={() => this.props.removeIngredient(this.props.ingredientText)}>X</button></td>
              </tr>
            </tbody>
          </table>
    );
  }
}

export default Ingredient;