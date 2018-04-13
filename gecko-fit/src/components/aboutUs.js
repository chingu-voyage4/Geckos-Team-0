import React, { Component } from "react";
import Modal from "react-modal";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.aboutUsToggle}
          onRequestClose={this.props.showAboutUs}
          contentLabel='About Us'
          ariaHideApp={false}
          closeTimeoutMS={200}
          className='about-us__modal'        
        >
          <div>
            <h3>Shantia Grimes-Farmer</h3>
            <h4>Team Lead/Coder</h4>
            <p>Animation student that decided code was more fun. I'm a self-taught web developer with a desire to keep learning and work in the industry. 
            <a href="https://github.com/SnGrimes" className='about-us__link'> Shantia's github</a></p>
        </div>
        <div>
            <h3>Steven Bowen</h3>
            <h4>Coder</h4>
            <p>Steven originally got into programming to automate some boring accounting tasks. He now spends his nights diving deeper into learning and expanding his programming knowledge.
            <a href="https://github.com/SDBowen" className='about-us__link'> Steven's github</a></p>
        </div>
        <div>
            <h3>Abel Acosta</h3>
            <h4>Coder</h4>
            <p>Teacher turned web developer. I make web applications for fun and with an emphasis on user experience.
            <a href="https://github.com/abecel22" className='about-us__link'> Abel's github</a></p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AboutUs