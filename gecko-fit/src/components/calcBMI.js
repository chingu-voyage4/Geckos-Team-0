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
          //onRequestClose={!this.props.bmiCalcToggle}
          contentLabel="BMI Calculator"
          ariaHideApp={false}
          closeTimeoutMS={200}
          className="modal"
        >
          <div>
            <h1>BMI Calculator!</h1>
          </div>
          <div>
            <form>
              Feet:
              <input
                type="number"
                name="feet"
                value={this.state.feet}
                onChange={e => this.handleFeetChange(e.target.value)}
                onFocus={this.handleFocus}
              />
              Inches:
              <input
                type="number"
                name="inches"
                value={this.state.inches}
                onChange={e => this.handleInchesChange(e.target.value)}
                onFocus={this.handleFocus}
              />
              <div>
                Weight:
                <input
                  type="number"
                  name="weight"
                  value={this.state.weight}
                  onChange={e => this.handleWeightChange(e.target.value)}
                  onFocus={this.handleFocus}
                />
              </div>
            </form>
          </div>
          <input
            type="button"
            name="calcBMI"
            value="Show BMI"
            onClick={this.calculateBMI}
          />
          <h3>Your BMI is: {this.state.bmi}</h3>
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
