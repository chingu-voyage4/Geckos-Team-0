import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    const defaultImg = require('../img/Food_00.jpg');
    this.state = {
      imgUrl:  defaultImg
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
          <h1 className="App__title">Gecko Fit</h1>
        </header>
      );
    }
  }

export default Header;
