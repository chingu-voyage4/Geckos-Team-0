import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    const defaultImg = require('../img/Food_00.jpg');
    const logo = require('../img/Gecko_fit_logo.png');
    this.state = {
      imgUrl:  defaultImg,
      logo: logo
    }
  }
  randomImg() {
    const randomNum = Math.floor(Math.random() * 3);
    const imgUrl = require('../img/Food_0' + randomNum + '.jpg');
    this.setState(() => {
      return {
        imgUrl: imgUrl
      };
    });
  }
  componentDidMount() {
    // change to 3000 if you want to see it in action
    setInterval(() => this.randomImg(), 120000); 
  }
    render() {
      const header = {
        backgroundColor: 'black',
        backgroundImage: 'url("' + this.state.imgUrl + '")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '100% auto'
      };
      return (
        <header className="App__header" style={header}>
          <img src={this.state.logo} alt='Gecko Fit logo' height='100' width='100' />
        </header>
      );
    }
  }

export default Header;
