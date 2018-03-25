import React, { Component } from "react";
import "./nutrition.css";

class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: 1
    };
  }
  // Render nutrition label from App inputs
  render() {
    if (!this.props.analysisToggle) {
      return null;
    } else {
      return (
        <section className="performance-facts">
          <header className="performance-facts__header">
            <h1 className="performance-facts__title">Nutrition Facts</h1>
            <p>Serving Per Recepie {this.state.servings}</p>
          </header>
          <table className="performance-facts__table">
            <thead>
              <tr>
                <th colSpan="3" className="small-info">
                  Amount Per Serving
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan="2">
                  <b>Calories </b>
                  {Math.round(this.props.analyzedCalories)}
                </th>
                <td>
                  Calories from Fat {Math.round(this.props.analyzedFat * 9)}
                </td>
              </tr>
              <tr className="thick-row">
                <td colSpan="3" className="small-info">
                  <b>% Daily Value*</b>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <b>Total Fat </b>
                  {Math.round(this.props.analyzedFat)}g
                </th>
                <td>
                  <b>{Math.round(this.props.analyzedFat / 65 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Saturated Fat {Math.round(this.props.analyzedFatSat)}g</th>
                <td>
                  <b>{Math.round(this.props.analyzedFatSat / 20 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Trans Fat {Math.round(this.props.analyzedFatTrans)}g</th>
                <td />
              </tr>
              <tr>
                <th colSpan="2">
                  <b>Cholesterol </b>
                  {Math.round(this.props.analyzedChole)}mg
                </th>
                <td>
                  <b>{Math.round(this.props.analyzedChole / 300 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <b>Sodium </b>
                  {Math.round(this.props.analyzedSodium)}mg
                </th>
                <td>
                  <b>{Math.round(this.props.analyzedSodium / 2400 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <th colSpan="2">
                  <b>Total Carbohydrate </b>
                  {Math.round(this.props.analyzedCarbs)}g
                </th>
                <td>
                  <b>{Math.round(this.props.analyzedCarbs / 300 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Dietary Fiber {Math.floor(this.props.analyzedFiber)}g</th>
                <td>
                  <b>{Math.round(this.props.analyzedFiber / 25 * 100)}%</b>
                </td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Sugars {Math.round(this.props.analyzedSugars)}g</th>
                <td />
              </tr>
              <tr className="thick-end">
                <th colSpan="2">
                  <b>Protein </b>
                  {Math.floor(this.props.analyzedProtein)}g
                </th>
                <td />
              </tr>
            </tbody>
          </table>

          {/*
          <table className="performance-facts__table--grid">
          <tbody>
            <tr>
              <td colSpan="2">Vitamin A 10%</td>
              <td>Vitamin C 0%</td>
            </tr>
            <tr className="thin-end">
              <td colSpan="2">Calcium 10%</td>
              <td>Iron 6%</td>
            </tr>
          </tbody>
        </table>
        */}

          <p className="small-info">
            * Percent Daily Values are based on a 2,000 calorie diet. Your daily
            values may be higher or lower depending on your calorie needs:
          </p>

          <table className="performance-facts__table--small small-info">
            <thead>
              <tr>
                <td colSpan="2" />
                <th>Calories:</th>
                <th>2,000</th>
                <th>2,500</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan="2">Total Fat</th>
                <td>Less than</td>
                <td>65g</td>
                <td>80g</td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th>Saturated Fat</th>
                <td>Less than</td>
                <td>20g</td>
                <td>25g</td>
              </tr>
              <tr>
                <th colSpan="2">Cholesterol</th>
                <td>Less than</td>
                <td>300mg</td>
                <td>300 mg</td>
              </tr>
              <tr>
                <th colSpan="2">Sodium</th>
                <td>Less than</td>
                <td>2,400mg</td>
                <td>2,400mg</td>
              </tr>
              <tr>
                <th colSpan="3">Total Carbohydrate</th>
                <td>300g</td>
                <td>375g</td>
              </tr>
              <tr>
                <td className="blank-cell" />
                <th colSpan="2">Dietary Fiber</th>
                <td>25g</td>
                <td>30g</td>
              </tr>
            </tbody>
          </table>

          <p className="small-info">Calories per gram:</p>
          <p className="small-info text-center">
            Fat 9 &bull; Carbohydrate 4 &bull; Protein 4
          </p>
        </section>
      );
    }
  }
}

export default Nutrition;
