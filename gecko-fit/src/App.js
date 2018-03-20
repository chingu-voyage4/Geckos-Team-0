import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import 'react-select/dist/react-select.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import Ingredient from './components/ingredient';
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
            quantity: []
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
        console.log(`The ingredient: ${this.state.ingredients} The quantity: ${this.state.quantity}`);
    }
    // remove ingredient from ingredient list
    removeIngredient(ingredient) {
        const index = this.state.ingredients.indexOf(ingredient);
        console.log(`Index of ingredient: ${index}`);
        let temp = this.state.quantity;
        temp.splice(index,1);
        this.setState((prevState) => {
            return {
                ingredients: prevState.ingredients.filter(
                    (element) => element !== ingredient,
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
                const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${num} 4 oz ${ingredientName} `);
                const data = await response.json();
                console.log(data);
                this.setState((prevState) => {
                    return {
                        apiData: prevState.apiData.concat(data),
                        quantity: prevState.quantity.concat(num)
                    };
                });
                this.addIngredient(item.label);
            }
            request();
        }
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
                            {this.state.ingredients.map((ingredient, index) => (
                                <Ingredient
                                    key={ingredient}
                                    ingredientText={ingredient}
                                    removeIngredient={this.removeIngredient}
                                    quantity={this.state.quantity[index]}
                                    calories={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty(
                                            'ENERC_KCAL'
                                        )
                                            ? this.state.apiData[index]
                                                  .totalNutrients.ENERC_KCAL
                                                  .quantity
                                            : 0
                                    }
                                    fat={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty('FAT')
                                            ? this.state.apiData[index]
                                                  .totalNutrients.FAT.quantity
                                            : 0
                                    }
                                    carbs={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty(
                                            'CHOCDF'
                                        )
                                            ? this.state.apiData[index]
                                                  .totalNutrients.CHOCDF
                                                  .quantity
                                            : 0
                                    }
                                    chole={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty('CHOLE')
                                            ? this.state.apiData[index]
                                                  .totalNutrients.CHOLE.quantity
                                            : 0
                                    }
                                    protein={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty(
                                            'PROCNT'
                                        )
                                            ? this.state.apiData[index]
                                                  .totalNutrients.PROCNT
                                                  .quantity
                                            : 0
                                    }
                                    sugar={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty('SUGAR')
                                            ? this.state.apiData[index]
                                                  .totalNutrients.SUGAR.quantity
                                            : 0
                                    }
                                    sodium={
                                        this.state.apiData[
                                            index
                                        ].totalNutrients.hasOwnProperty('NA')
                                            ? this.state.apiData[index]
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
