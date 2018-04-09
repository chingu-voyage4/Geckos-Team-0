import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.menuToggle = this.menuToggle.bind(this);
        this.state = {
            menuOpen: false
        };
    }

    menuToggle(event) {
        const button = event.currentTarget;
        button.classList.toggle('is-active');
        this.setState((prevState) => {
            return {
                menuOpen: !prevState.menuOpen
            };
        });
    }
    render() {
        const divStyle = {
            width: '200px',
            transform: 'translate(1px, 1px)'
        };
        return (
            <nav className="navigation">
                <button
                    className="navigation__button"
                    onClick={this.menuToggle}
                >
                    <div className="navigation__wrapper">
                        <span className="navigation__line navigation__line--1" />
                        <span className="navigation__line navigation__line--2" />
                        <span className="navigation__line navigation__line--3" />
                    </div>
                </button>
                <div>
                    {this.state.menuOpen && (
                        <ul className="navigation__expansion" style={divStyle}>
                            <li>
                                <button
                                    className="navigation__expansion__bmi-button"
                                    onClick={this.props.showCalc}
                                >
                                    BMI Calculator
                                </button>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">About App</a>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

export default Menu;
