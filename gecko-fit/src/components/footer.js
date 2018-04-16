import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    const githubLogo = require('../img/GitHub-Mark-32px.png');
    const chinguLogo = require('../img/chingu_logo.png');
    this.state = {
      chingu: chinguLogo,
      github: githubLogo
    }
  }
  render() {
    return (
      <footer className="footer">
        <p id="edamam-badge" data-color="transparent" className="footer__edamam-link"></p>
        <p className="footer__chingu-link">
        <a href="https://chingu.io/">
          <img 
            src={this.state.chingu}
            alt="Chingu logo"
            height="32"
            width="32"
          /></a>
        </p>
        <p className="footer__github-link">
          <a href="https://github.com/chingu-voyage4/Geckos-Team-0">
            <img 
              src={this.state.github}
              alt="Github logo"
              height="32"
              width="32"
            />
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;