import React, { Component } from 'react';

class Ingredient extends Component {
    render() {
        return (
                    <tr>
                        <td>{this.props.ingredientText}</td>
                        <td>{this.props.quantity}</td>
                        <td>{this.props.calories.toFixed(0)}</td>
                        <td>{this.props.fat.toFixed(0)}</td>
                        <td>{this.props.carbs.toFixed(0)}</td>
                        <td>{this.props.chole.toFixed(0)}</td>
                        <td>{this.props.protein.toFixed(0)}</td>
                        <td>{this.props.sugar.toFixed(0)}</td>
                        <td>{this.props.sodium.toFixed(0)}</td>
                        <td>
                            <button
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
