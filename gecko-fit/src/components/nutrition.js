import React, { Component } from "react";
import "./nutrition.css";

class Nutrition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servings: 1,
      calories: 200,
      totalFat: 14,
      satFat: 9,
      transFat: 0,
      cholesterol: 55,
      sodium: 40,
      totalCarbs: 17,
      carbsFiber: 1,
      carbsSugar: 14,
      proteins: 3
    };
  }

  render() {
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
                {this.state.calories}
              </th>
              <td>Calories from Fat {Math.round(this.state.totalFat * 9)}</td>
            </tr>
            <tr className="thick-row">
              <td colSpan="3" className="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Fat </b>
                {this.state.totalFat}g
              </th>
              <td>
                <b>{Math.round(this.state.totalFat / 65 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>Saturated Fat {this.state.totalFat}g</th>
              <td>
                <b>{Math.round(this.state.satFat / 20 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>Trans Fat {this.state.transFat}g</th>
              <td />
            </tr>
            <tr>
              <th colSpan="2">
                <b>Cholesterol </b>
                {this.state.cholesterol}mg
              </th>
              <td>
                <b>{Math.round(this.state.cholesterol / 300 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Sodium </b>
                {this.state.sodium}mg
              </th>
              <td>
                <b>{Math.round(this.state.sodium / 2400 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Carbohydrate </b>
                {this.state.totalCarbs}g
              </th>
              <td>
                <b>{Math.round(this.state.totalCarbs / 300 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>Dietary Fiber {this.state.carbsFiber}g</th>
              <td>
                <b>{Math.round(this.state.carbsFiber / 25 * 100)}%</b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>Sugars {this.state.carbsSugar}g</th>
              <td />
            </tr>
            <tr className="thick-end">
              <th colSpan="2">
                <b>Protein </b>
                {this.state.proteins}g
              </th>
              <td />
            </tr>
          </tbody>
        </table>

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

export default Nutrition;
