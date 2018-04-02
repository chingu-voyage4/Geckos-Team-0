import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
            <tr>
                <td tableHeadData="Ingredient">{this.props.ingredientText}</td>
                <td tableHeadData="Ounces">{this.props.quantity}</td>
                <td tableHeadData="Calories">
                    {this.props.calories.toFixed(0)}
                </td>
                <td tableHeadData="Fat">{this.props.fat.toFixed(0)}</td>
                <td tableHeadData="Carbs">{this.props.carbs.toFixed(0)}</td>
                <td tableHeadData="Cholesterol">
                    {this.props.chole.toFixed(0)}
                </td>
                <td tableHeadData="Protein">{this.props.protein.toFixed(0)}</td>
                <td tableHeadData="Sugar">{this.props.sugar.toFixed(0)}</td>
                <td tableHeadData="Sodium">{this.props.sodium.toFixed(0)}</td>
                <td>
                    <button
                        className="ingredient-item__delete-button"
                        onClick={() =>
                            this.props.removeIngredient(
                                this.props.ingredientText
                            )
                        }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default Ingredient;
