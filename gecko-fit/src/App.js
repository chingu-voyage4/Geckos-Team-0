import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          
          <h1 className="App__title">Gecko Fit</h1>
        </header>
          <div className="ingredient-container">
            <form className="ingredient-container__form">
              <input type="text" name="ingredient" className="ingredient-container__field" placeholder="Type in ingredient to get nutrition info" /> 
              <input type="submit" value="Search" className="ingredient-container__submit" />
            </form>

            <div>
              <input type="button" value="Analyze Recipe" className="ingredient-container__analyze" /> 
            </div>

          </div>

      </div>
    );
  }
}

export default App;
