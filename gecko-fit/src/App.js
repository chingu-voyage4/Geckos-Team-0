import React, { Component } from 'react';
import './App.css';
import 'react-select/dist/react-select.css';
import Header from './components/header';
import Menu from './components/menu';
import SearchBar from './components/searchBar';
import Ingredient from './components/ingredient';
import Nutrition from './components/nutrition';
import Footer from './components/footer';
import OptionModal from './components/optionModal';
import AboutUs from './components/aboutUs';
import CalcBMI from './components/calcBMI';
import { API_KEY, API_ID } from './apiKey';

class App extends Component {
    constructor(props) {
        super(props);
        this.addIngredient = this.addIngredient.bind(this);
        this.removeIngredient = this.removeIngredient.bind(this);
        this.ingredientSelection = this.ingredientSelection.bind(this);
        this.showAnalysis = this.showAnalysis.bind(this);
        this.showCalc = this.showCalc.bind(this);
        this.closeHelp = this.closeHelp.bind(this);
        this.showAboutUs = this.showAboutUs.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.state = {
            autocomplete: '',
            apiData: [],
            ingredients: [],
            quantity: [],
            calories: [],
            fat: [],
            carbs: [],
            fiber: [],
            chole: [],
            protein: [],
            sugar: [],
            sodium: [],
            fatSat: [],
            fatMono: [],
            fatPoly: [],
            analysisToggle: false,
            bmiCalcToggle: false,
            aboutUsToggle: false,
            error: undefined,
            cookie: false,
            instructions: false
        };
    }
    componentWillMount() {
        //function to create a new cookie when user first vists site
        function createCookie(name, value, days) {
            let expires;
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                expires = '; expires=' + date.toGMTString();
            } else expires = '';
            document.cookie = name + '=' + value + expires + '; path/';
        }
        // will check if the cookie already exists
        if (
            document.cookie.split(';').filter((item) => {
                return item.includes('newVisitor');
            }).length
        ) {
            console.log('This a returning user.');
        } else {
            console.log('New visitor...creating cookie');
            // createCookie needs name, the value of name, and the amount of days the cookie stays alive
            createCookie('name', 'newVisitor', 28);
            this.setState((prevState) => {
                return {
                    cookie: !prevState.cookie,
                    instructions: true
                };
            });
        }
    }
    // function that will close the instructions box when the user clicks it
    closeHelp() {
        console.log('User clicked the instructions box to close it');
        this.setState((prevState) => {
            return {
                instructions: false
            };
        });
    }
    // add ingredient to ingredient list
    addIngredient(ingredient) {
        ingredient = ingredient.toLowerCase().trim();
        if (this.state.ingredients.indexOf(ingredient) > -1) {
            this.setState({ error: 'This ingredient is already on the list' });
        } else {
            this.setState((prevState) => {
                return {
                    ingredients: prevState.ingredients.concat(ingredient)
                };
            });
        }
    }
    // remove ingredient from ingredient list
    removeIngredient(ingredient) {
        console.log("removeIngredient: " + typeof ingredient)
        const index = this.state.ingredients.indexOf(ingredient);
        let temp = this.state.quantity;
        temp.splice(index, 1);
        //remove all nutrients
        this.state.apiData.splice(index, 1);
        this.state.calories.splice(index, 1);
        this.state.fat.splice(index, 1);
        this.state.carbs.splice(index, 1);
        this.state.fiber.splice(index, 1);
        this.state.chole.splice(index, 1);
        this.state.protein.splice(index, 1);
        this.state.sugar.splice(index, 1);
        this.state.sodium.splice(index, 1);
        this.state.fatSat.splice(index, 1);
        this.state.fatMono.splice(index, 1);
        this.state.fatPoly.splice(index, 1);
        if (this.state.ingredients.length === 1) {
            this.setState((prevState) => {
                return {
                    ingredients: prevState.ingredients.filter(
                        (element) => element !== ingredient
                    ),
                    quantity: temp,
                    analysisToggle: false
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    ingredients: prevState.ingredients.filter(
                        (element) => element !== ingredient
                    ),
                    quantity: temp
                };
            });
        }
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
        let apiResult = [];
        let len = this.state.autocomplete.length;
        for (var i = 0; i < len; i++) {
            apiResult.push({
                value: this.state.autocomplete[i],
                label: this.state.autocomplete[i]
            });
        }
        return apiResult;
    }
    // fetch selected ingredient from searchBar
    ingredientSelection(item, num) {
        if (item) {
            const ingredientName = item.label.toLowerCase().trim();
            if (this.state.ingredients.indexOf(ingredientName) < 0) {
                const request = async () => {
                    const response = await fetch(
                        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&ingr=${num} oz ${ingredientName} `
                    );
                    const data = await response.json();
                    console.log(data);
                    if (data.totalWeight > 0) {
                        this.setState((prevState) => {
                            return {
                                apiData: prevState.apiData.concat(data),
                                quantity: prevState.quantity.concat(num),
                                calories: data.totalNutrients.hasOwnProperty(
                                    'ENERC_KCAL'
                                )
                                    ? prevState.calories.concat(
                                          data.totalNutrients.ENERC_KCAL
                                              .quantity
                                      )
                                    : prevState.calories.concat(0),
                                fat: data.totalNutrients.hasOwnProperty('FAT')
                                    ? prevState.fat.concat(
                                          data.totalNutrients.FAT.quantity
                                      )
                                    : prevState.fat.concat(0),
                                fatSat: data.totalNutrients.hasOwnProperty(
                                    'FASAT'
                                )
                                    ? prevState.fatSat.concat(
                                          data.totalNutrients.FASAT.quantity
                                      )
                                    : prevState.fatSat.concat(0),
                                fatMono: data.totalNutrients.hasOwnProperty(
                                    'FAMS'
                                )
                                    ? prevState.fatMono.concat(
                                          data.totalNutrients.FAMS.quantity
                                      )
                                    : prevState.fatMono.concat(0),
                                fatPoly: data.totalNutrients.hasOwnProperty(
                                    'FAPU'
                                )
                                    ? prevState.fatPoly.concat(
                                          data.totalNutrients.FAPU.quantity
                                      )
                                    : prevState.fatPoly.concat(0),
                                carbs: data.totalNutrients.hasOwnProperty(
                                    'CHOCDF'
                                )
                                    ? prevState.carbs.concat(
                                          data.totalNutrients.CHOCDF.quantity
                                      )
                                    : prevState.carbs.concat(0),
                                fiber: data.totalNutrients.hasOwnProperty(
                                    'FIBTG'
                                )
                                    ? prevState.fiber.concat(
                                          data.totalNutrients.FIBTG.quantity
                                      )
                                    : prevState.fiber.concat(0),
                                chole: data.totalNutrients.hasOwnProperty(
                                    'CHOLE'
                                )
                                    ? prevState.chole.concat(
                                          data.totalNutrients.CHOLE.quantity
                                      )
                                    : prevState.chole.concat(0),
                                protein: data.totalNutrients.hasOwnProperty(
                                    'PROCNT'
                                )
                                    ? prevState.protein.concat(
                                          data.totalNutrients.PROCNT.quantity
                                      )
                                    : prevState.protein.concat(0),
                                sugar: data.totalNutrients.hasOwnProperty(
                                    'SUGAR'
                                )
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
                    } else {
                        this.setState({
                            error: 'This ingredient does not exist'
                        });
                    }
                };
                request();
            } else {
                this.setState({
                    error: 'This ingredient is already on the list'
                });
            }
        } else {
            this.setState({ error: 'This ingredient does not exist' });
        }
    }

    handleClearErrors = () => {
        this.setState({ error: undefined });
    };

    showAnalysis() {
        this.setState({ analysisToggle: !this.state.analysisToggle });
    }

    showCalc = () => {
        this.setState({ bmiCalcToggle: !this.state.bmiCalcToggle });
        if (this.state.aboutUsToggle === true) {
            this.setState({ aboutUsToggle: false });
        }
    };

    showAboutUs() {
        this.setState({ aboutUsToggle: !this.state.aboutUsToggle });
        if (this.state.bmiCalcToggle === true) {
            this.setState({ bmiCalcToggle: false });
        }
    }

    handleRemoveAll() {
        this.state.ingredients.forEach(i => {
            this.removeIngredient(i);
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App__wrapper">
                    <Header />
                    <OptionModal
                        error={this.state.error}
                        handleClearErrors={this.handleClearErrors}
                    />
                    <CalcBMI
                        bmiCalcToggle={this.state.bmiCalcToggle}
                        showCalc={this.showCalc}
                    />
                    <AboutUs
                        aboutUsToggle={this.state.aboutUsToggle}
                        showAboutUs={this.showAboutUs}
                    />
                    <div className="ingredient-wrapper">
                        <Menu
                            showCalc={this.showCalc}
                            showAboutUs={this.showAboutUs}
                        />
                        {this.state.instructions && (
                            <div
                                className="App__greeting"
                                onClick={this.closeHelp}
                            >
                                <p className="App__greeting-text">
                                    I see you are a first time visitor! To use
                                    this application, please enter an ingredient
                                    into the search bar and the number of
                                    ounces, then click Add! Just click this box
                                    to close the instructions!
                                </p>
                            </div>
                        )}
                        <SearchBar
                            onSearchTermChange={(term) =>
                                this.ingredientSearch(term)
                            }
                            apiResult={this.apiResult()}
                            ingredientSelection={this.ingredientSelection}
                            addIngredient={this.addIngredient}
                            ingredients={this.state.ingredients}
                        />
                        <div className="ingredient-container__list">
                            <table className="ingredient-item">
                                <tbody>
                                    {this.state.ingredients.length > 0 && (
                                        <tr className="ingredient-item__head-row">
                                            <th>Ingredient</th>
                                            <th>Ounces</th>
                                            <th>Calories</th>
                                            <th>Fat</th>
                                            <th>Carbohydrates</th>
                                            <th>Cholesterol</th>
                                            <th>Proteins</th>
                                            <th>Sugars</th>
                                            <th>Sodium</th>
                                        </tr>
                                    )}
                                    {this.state.ingredients.map(
                                        (ingredient, index) => (
                                            <Ingredient
                                                key={ingredient}
                                                ingredientText={ingredient}
                                                removeIngredient={
                                                    this.removeIngredient
                                                }
                                                quantity={
                                                    this.state.quantity[index]
                                                }
                                                calories={
                                                    this.state.calories[index]
                                                }
                                                fat={this.state.fat[index]}
                                                carbs={this.state.carbs[index]}
                                                chole={this.state.chole[index]}
                                                protein={
                                                    this.state.protein[index]
                                                }
                                                sugar={this.state.sugar[index]}
                                                sodium={
                                                    this.state.sodium[index]
                                                }
                                            />
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="ingredient-container__analyze">
                            {this.state.ingredients.length > 0 && (
                                <input
                                    className="ingredient-container__analyze__button"
                                    type="button"
                                    value="Analyze Recipe"
                                    onClick={this.showAnalysis}
                                />
                            )}
                            {this.state.ingredients.length > 0 && (
                                <input
                                    className='ingredient-container__analyze__button' 
                                    type='button'
                                    value='Remove All'
                                    onClick={this.handleRemoveAll}
                                    />
                            )}
                        </div>
                        <div className="ingredient-container__label">
                            <Nutrition
                                analyzedCalories={this.state.calories.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedFat={this.state.fat.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedCarbs={this.state.carbs.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedFiber={this.state.fiber.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedChole={this.state.chole.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedProtein={this.state.protein.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedSugars={this.state.sugar.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedSodium={this.state.sodium.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedFatSat={this.state.fatSat.reduce(
                                    (a, b) => a + b,
                                    0
                                )}
                                analyzedFatTrans={
                                    this.state.fatMono.reduce(
                                        (a, b) => a + b,
                                        0
                                    ) +
                                    this.state.fatPoly.reduce(
                                        (a, b) => a + b,
                                        0
                                    )
                                }
                                analysisToggle={this.state.analysisToggle}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
