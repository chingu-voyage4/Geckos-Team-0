import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.menuToggle = this.menuToggle.bind(this);
  }
  menuToggle(event) {
    const button = event.currentTarget;
    button.classList.toggle("is-active");
}
  render() {
    return (
      <nav className="navigation">
        <button className="navigation__button" onClick={this.menuToggle}>
          <div className="navigation__wrapper">
            <span className="navigation__line navigation__line--1"></span>
            <span className="navigation__line navigation__line--2"></span>
            <span className="navigation__line navigation__line--3"></span>      
          </div>
        </button>
      </nav>
    );
  }
}

export default Menu;