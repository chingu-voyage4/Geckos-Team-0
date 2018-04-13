import React, { Component } from "react";
import Modal from "react-modal";

class CalcBMI extends Component {
  constructor(props) {
    super(props);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.state = {
      feet: 0,
      inches: 0,
      weight: 0,
      bmi: 0
    };
  }

  calculateBMI() {
    let height = this.state.feet * 12 + Number(this.state.inches);
    let BMI = (this.state.weight / Math.pow(height, 2) * 703).toFixed(1);
    this.setState({ bmi: BMI });
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.bmiCalcToggle}
          onRequestClose={this.props.showCalc}
          contentLabel="BMI Calculator"
          ariaHideApp={false}
          closeTimeoutMS={200}
          className='calc__modal'
        >
          <div>
            <h1>BMI Calculator!</h1>
          </div>
          <div className='calc-container__fields'>
            <form>
            <div className='calc-wrapper__inputs'>
              <label className="calc-input__label">Feet:</label>
              <input
                className="calc-input__field"
                type="number"
                name="feet"
                value={this.state.feet}
                onChange={e => this.handleFeetChange(e.target.value)}
                onFocus={this.handleFocus}
              />
              </div>
              <div className='calc-wrapper__inputs'>
              <label className="calc-input__label">Inches:</label>
              <input
                className="calc-input__field"
                type="number"
                name="inches"
                value={this.state.inches}
                onChange={e => this.handleInchesChange(e.target.value)}
                onFocus={this.handleFocus}
              />
              </div>
              <div className='calc-wrapper__inputs'>
                <label className="calc-input__label">Weight:</label>
                <input
                  className="calc-input__field"
                  type="number"
                  name="weight"
                  value={this.state.weight}
                  onChange={e => this.handleWeightChange(e.target.value)}
                  onFocus={this.handleFocus}
                />
              </div>
            </form>
          </div>
          <div className='calc-container__display'>
          <h3>Your BMI is: {this.state.bmi}</h3>
          </div>
          <div className="calc-container__button">
          <input
            
            type="button"
            name="calcBMI"
            value="Show BMI"
            onClick={this.calculateBMI}
          />
          </div>
          </Modal>
      </div>
    );
  }

  handleFeetChange(feet) {
    this.setState({ feet });
  }

  handleInchesChange(inches) {
    this.setState({ inches });
  }

  handleWeightChange(weight) {
    this.setState({ weight });
  }
}

export default CalcBMI;
