import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import 'react-select/dist/react-select.css';
import Header from './components/header';
import Menu from './components/menu';
import SearchBar from './components/searchBar';
import Ingredient from './components/ingredient';
import Nutrition from './components/nutrition';
import Footer from './components/footer';
import { API_KEY, API_ID } from './apiKey';

class App extends Component {
    constructor(props) {
        super(props);
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.ingredientSelection = this.ingredientSelection.bind(this);
        this.state = {
            autocomplete: '',
            apiData: [],
            ingredients: [],
            quantity: [],
            calories: [],
            fat: [],
            carbs: [],
            chole: [],
            protein: [],
            sugar: [],
            sodium: []
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
        console.log(
            `The ingredient: ${this.state.ingredients} The quantity: ${
                this.state.quantity
            }`
        );
    }
    // remove ingredient from ingredient list
    removeIngredient(ingredient) {
        const index = this.state.ingredients.indexOf(ingredient);
        console.log(`Index of ingredient: ${index}`);
        let temp = this.state.quantity;
        temp.splice(index, 1);
        //remove all nutrients
        this.state.apiData.splice(index, 1);
        this.state.calories.splice(index, 1);
        this.state.fat.splice(index, 1);
        this.state.carbs.splice(index, 1);
        this.state.chole.splice(index, 1);
        this.state.protein.splice(index, 1);
        this.state.sugar.splice(index, 1);
        this.state.sodium.splice(index, 1);
        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.filter(
                    (element) => element !== ingredient
                ),
                quantity: temp
            };
        });

        console.log(`From removeIngredient - removed ${ingredient}`);
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
    ingredientSelection(item, num) {
        if (item) {
            console.log('Selected ingredient:' + item.label);
            console.log('Selected quantity: ' + num);
            const ingredientName = item.label;
            const request = async () => {
                const response = await fetch(
                    `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${num} 4 oz ${ingredientName} `
                );
                const data = await response.json();
                console.log(data);
                this.setState((prevState) => {
                    return {
                        apiData: prevState.apiData.concat(data),
                        quantity: prevState.quantity.concat(num),
                        calories: data.totalNutrients.hasOwnProperty(
                            'ENERC_KCAL'
                        )
                            ? prevState.calories.concat(
                                  data.totalNutrients.ENERC_KCAL.quantity
                              )
                            : prevState.calories.concat(0),
                        fat: data.totalNutrients.hasOwnProperty('FAT')
                            ? prevState.fat.concat(
                                  data.totalNutrients.FAT.quantity
                              )
                            : prevState.fat.concat(0),
                        carbs: data.totalNutrients.hasOwnProperty('CHOCDF')
                            ? prevState.carbs.concat(
                                  data.totalNutrients.CHOCDF.quantity
                              )
                            : prevState.carbs.concat(0),
                        chole: data.totalNutrients.hasOwnProperty('CHOLE')
                            ? prevState.chole.concat(
                                  data.totalNutrients.CHOLE.quantity
                              )
                            : prevState.chole.concat(0),
                        protein: data.totalNutrients.hasOwnProperty('PROCNT')
                            ? prevState.protein.concat(
                                  data.totalNutrients.PROCNT.quantity
                              )
                            : prevState.protein.concat(0),
                        sugar: data.totalNutrients.hasOwnProperty('SUGAR')
                            ? prevState.sugar.concat(
                                  data.totalNutrients.SUGAR.quantity
                              )
                            : prevState.sugar.concat(0),
                        sodium: data.totalNutrients.hasOwnProperty('NA')
                            ? prevState.sodium.concat(
                                  data.totalNutrients.NA.quantity
                              )
                            : prevState.sodium.concat(0)
                    };
                });
                this.addIngredient(item.label);
            };
            request();
        }
    }

    analyzeRecipe = () => {
        //add all ingredients
        let analyzedCalories = this.state.calories.reduce((a, b) => a + b, 0);
        let analyzedFat = this.state.fat.reduce((a, b) => a + b, 0);
        let analyzedCarbs = this.state.carbs.reduce((a, b) => a + b, 0);
        let analyzedChole = this.state.chole.reduce((a, b) => a + b, 0);
        let analyzedProtein = this.state.protein.reduce((a, b) => a + b, 0);
        let analyzedSugars = this.state.sugar.reduce((a, b) => a + b, 0);
        let analyzedSodium = this.state.sodium.reduce((a, b) => a + b, 0);
        console.table({
            analyzedCalories: analyzedCalories,
            analyzedFat: analyzedFat,
            analyzedCarbs: analyzedCarbs,
            analyzedChole: analyzedChole,
            analyzedProtein: analyzedProtein,
            analyzedSugars: analyzedSugars,
            analyzedSodium: analyzedSodium
        });
    };

    render() {
        return (
            <div className="App">
                <div className="App__wrapper">
                    <Header />
                    <div className="ingredient-wrapper">
                        <Menu />
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
                            {this.state.ingredients.map((ingredient, index) => (
                                <Ingredient
                                    key={ingredient}
                                    ingredientText={ingredient}
                                    removeIngredient={this.removeIngredient}
                                    quantity={this.state.quantity[index]}
                                    calories={this.state.calories[index]}
                                    fat={this.state.fat[index]}
                                    carbs={this.state.carbs[index]}
                                    chole={this.state.chole[index]}
                                    protein={this.state.protein[index]}
                                    sugar={this.state.sugar[index]}
                                    sodium={this.state.sodium[index]}
                                />
                            ))}
                        </div>
                        <div className="ingredient-container__analyze">
                            <input
                                type="button"
                                value="Analyze Recipe"
                                onClick={this.analyzeRecipe}
                            />
                            <Nutrition />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
