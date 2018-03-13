import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import 'react-select/dist/react-select.css';
import Header from './components/header';
import SearchBar from './components/searchBar';
import Ingredient from './components/ingredient';
import Footer from './components/footer';

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
        const app_id = '20f484de';
        const app_key = '58758eaee27454caa774cc54092a9fc6';
        fetch(
            //this api call needs quantity , unit , and ingredient.
            //Have a space between each.
            `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=4 oz ${ingredientName} `
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState((prevState) => {
                    return {
                        apiData: prevState.apiData.concat(data)
                    };
                });
                // this.setState({
                //     totalCalories: data.totalNutrients.hasOwnProperty(
                //         'ENERC_KCAL'
                //     )
                //         ? data.totalNutrients.ENERC_KCAL.quantity
                //         : 0,
                //     totalFat: data.totalNutrients.hasOwnProperty('FAT')
                //         ? data.totalNutrients.FAT.quantity
                //         : 0,
                //     totalProtein: data.totalNutrients.hasOwnProperty('PROCNT')
                //         ? data.totalNutrients.PROCNT.quantity
                //         : 0
                // });
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
