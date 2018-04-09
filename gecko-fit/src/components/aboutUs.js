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
            <h4>Shantia Grimes-Farmer</h4>
            <h5>Team Lead/Coder</h5>
            <p>Animation student that decided code was more fun. Self-taught web developer with a desire to keep learning and work in the industry. 
            <a href="https://github.com/SnGrimes" className='about-us__link'> Shantia's github</a></p>
        </div>
        <div>
            <h4>Steven Bowen</h4>
            <h5>Coder</h5>
            <p></p>
            <a href="https://github.com/SDBowen" className='about-us__link'>Steven's github</a>
        </div>
        <div>
            <h4>Abel Acosta</h4>
            <h5>Coder</h5>
            <p></p>
            <a href="https://github.com/abecel22" className='about-us__link'>Abel's github</a>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AboutUs