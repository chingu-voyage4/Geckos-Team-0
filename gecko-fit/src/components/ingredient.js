import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <tr>
                <td table-head-data="Ingredient">
                    {this.props.ingredientText}
                </td>
                <td table-head-data="Ounces">{this.props.quantity}</td>
                <td table-head-data="Calories">
                    {this.props.calories.toFixed(0)}
                </td>
                <td table-head-data="Fat">{this.props.fat.toFixed(0)}</td>
                <td table-head-data="Carbs">{this.props.carbs.toFixed(0)}</td>
                <td table-head-data="Cholesterol">
                    {this.props.chole.toFixed(0)}
                </td>
                <td table-head-data="Protein">
                    {this.props.protein.toFixed(0)}
                </td>
                <td table-head-data="Sugar">{this.props.sugar.toFixed(0)}</td>
                <td table-head-data="Sodium">{this.props.sodium.toFixed(0)}</td>
                <td>
                    <button
                        className="ingredient-item__delete-button"
                        onClick={() =>
                            this.props.removeIngredient(
                                this.props.ingredientText
                            )
                        }
                    >
                        Remove
                    </button>
                </td>
            </tr>
        );
    }
}

export default Ingredient;
