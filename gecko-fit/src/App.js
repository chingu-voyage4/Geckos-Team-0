import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import 'react-select/dist/react-select.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import Ingredient from './components/ingredient';
import Footer from './components/footer';
import {API_KEY, API_ID } from './apiKey';

class App extends Component {
    constructor(props) {
        super(props);
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.ingredientSelection = this.ingredientSelection.bind(this);
        this.state = {
            autocomplete: '',
            apiData: [],
            ingredients: []
        };
    }
    // add ingredient to ingredient list
    addIngredient(ingredient) {
        if (!ingredient) {
            return 'Enter an ingredient';
        }

        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.concat(ingredient)
            };
        });
        console.log(this.state.ingredients);
    }
    // remove ingredient from ingredient list
    removeIngredient(ingredient) {
        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.filter(
                    (element) => element !== ingredient
                )
            };
        });

        console.log(`From removeIngredient: ${ingredient}`);
    }

    ingredientSearch(term) {
        fetch(
            //change the last of this api call after to get different results ?q=
            `https://cors-anywhere.herokuapp.com/http://api.edamam.com/auto-complete?q=${term}`
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    autocomplete: data
                });
                this.apiResult();
            });
    }

    // format api results for react-select
    apiResult() {
        let searchResult = [];
        let len = this.state.autocomplete.length;
        for (var i = 0; i < len; i++) {
            searchResult.push({
                value: this.state.autocomplete[i],
                label: this.state.autocomplete[i]
            });
        }
        return searchResult;
    }
    // fetch selected ingredient from searchBar
    ingredientSelection(item) {
        console.log('Selected ingredient:' + item.label);
        const ingredientName = item.label;
        fetch(
            //this api call needs quantity , unit , and ingredient.
            //Have a space between each.
            `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=4 oz ${ingredientName} `
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState((prevState) => {
                    return {
                        apiData: prevState.apiData.concat(data)
                    };
                });
            });
    }
    render() {
        return (
            <div className="App">
                <div className="App__wrapper">
                    <Header />
                    <div className="ingredient-wrapper">
                        <SearchBar
                            onSearchTermChange={(term) =>
                                this.ingredientSearch(term)
                            }
                            searchResult={this.apiResult()}
                            ingredientSelection={this.ingredientSelection}
                            addIngredient={this.addIngredient}
                            ingredients={this.state.ingredients}
                        />
                        <div className="ingredient-container__list">
                            {this.state.ingredients.map((ingredient) => (
                                <Ingredient
                                    key={ingredient}
                                    ingredientText={ingredient}
                                    removeIngredient={this.removeIngredient}
                                    calories={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'ENERC_KCAL'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.ENERC_KCAL
                                                  .quantity
                                            : 0
                                    }
                                    fat={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'FAT'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.FAT.quantity
                                            : 0
                                    }
                                    carbs={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'CHOCDF'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.CHOCDF
                                                  .quantity
                                            : 0
                                    }
                                    chole={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'CHOLE'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.CHOLE.quantity
                                            : 0
                                    }
                                    protein={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'PROCNT'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.PROCNT
                                                  .quantity
                                            : 0
                                    }
                                    sugar={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'SUGAR'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.SUGAR.quantity
                                            : 0
                                    }
                                    sodium={
                                        this.state.apiData[0].totalNutrients.hasOwnProperty(
                                            'NA'
                                        )
                                            ? this.state.apiData[0]
                                                  .totalNutrients.NA.quantity
                                            : 0
                                    }
                                />
                            ))}
                        </div>
                        <div className="ingredient-container__analyze">
                            <input type="button" value="Analyze Recipe" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
