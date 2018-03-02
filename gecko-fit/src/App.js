import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="App__wrapper">
          <header className="App__header">
            
            <h1 className="App__title">Gecko Fit</h1>
          </header>
            <div className="ingredient-container">
              <form className="ingredient-container__form">
                <input type="text" name="ingredient" className="ingredient-container__field" placeholder="Type in ingredient to get nutrition info" /> 
                <input type="submit" value="Search" className="ingredient-container__submit" />
              </form>
            </div>
            <div className="ingredient-container__list">
              
            </div>
            <div className="ingredient-container__analyze">
              <input type="button" value="Analyze Recipe" /> 
            </div>
          </div>
          <footer className="footer">
          <p className="footer__chingu-link">Created in <a href="#">Chingu Voyage-4</a></p>
          <p className="footer__github-link"><a href="#">Link to Github</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
