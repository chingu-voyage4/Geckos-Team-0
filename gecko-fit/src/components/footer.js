import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__chingu-link">
          Created in <a href="https://chingu.io/">Chingu Voyage-4</a>
        </p>
        <p className="footer__github-link">
          <a href="https://github.com/chingu-voyage4/Geckos-Team-0">
            Link to Github
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;