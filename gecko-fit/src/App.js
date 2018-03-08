import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import 'react-select/dist/react-select.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__wrapper">
            <Header />
            <Body />    
        </div>
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App__header">
        <h1 className="App__title">Gecko Fit</h1>
      </header>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="ingredient-wrapper">
        <div className="ingredient-container">
            <form className="ingredient-container__form">
              <input type="text" name="ingredient" className="ingredient-container__field" placeholder="Type in ingredient to get nutrition info" /> 
              <input type="submit" value="Add" className="ingredient-container__submit" />
            </form>
        </div>  
        <div className="ingredient-container__list">
                  
        </div>
        <div className="ingredient-container__analyze">
          <input type="button" value="Analyze Recipe" /> 
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <p className="footer__chingu-link">Created in <a href="https://chingu.io/">Chingu Voyage-4</a></p>
          <p className="footer__github-link"><a href="https://github.com/chingu-voyage4/Geckos-Team-0">Link to Github</a></p>
      </footer>
    )
  }
}

export default App;
