import SearchBar from "../components/searchBar";
import React from "react";
import { shallow, render } from "enzyme";

// test searchBar render()
describe("SearchBar Component", () => {
  it("Should render with no errors", () => {
    expect(
      shallow(<SearchBar />).exists(
        <form className="ingredient-container__form" />
      )
    ).toBe(true);
  });
  it("renders an ingredient input", () => {
    expect(shallow(<SearchBar />).find('[name="ingredient"]').length).toEqual(
      1
    );
  });
  it("renders a quantity input", () => {
    expect(shallow(<SearchBar />).find('[name="quantity"]').length).toEqual(1);
  });
  it("renders a submit button", () => {
    expect(shallow(<SearchBar />).find('[type="submit"]').length).toEqual(1);
  });

  // test state changes from user input
  describe("Quantity input", () => {
    it("should respond to change event and change the state of the SearchBar Component", () => {
      const wrapper = shallow(<SearchBar />);
      wrapper
        .find('[name="quantity"]')
        .simulate("change", { target: { value: 5 } });

      expect(wrapper.state("quantity")).toEqual(5);
    });
  });
  describe("Ingredient select", () => {
    it("should respond to change event and change the state of the SearchBar Component", () => {
      const wrapper = shallow(<SearchBar />);
      wrapper.find('[name="ingredient"]').simulate("change", "bacon");

      expect(wrapper.state("selectedOption")).toEqual("bacon");
    });
  });

  describe("Ingredient submit", () => {
    it("should reset the state of the SearchBar Component", () => {
      const searchBarProps = {
        ingredientSelection: () => {}
      };
      const wrapper = shallow(<SearchBar {...searchBarProps} />);
      wrapper
        .setState({ selectedOption: "bacon", quantity: 5 })
        .find(".ingredient-container__form")
        .simulate("submit", {
          preventDefault: () => {}
        });

      expect(wrapper.state("quantity")).toEqual(1);
      expect(wrapper.state("selectedOption")).toEqual("");
    });
  });
});
