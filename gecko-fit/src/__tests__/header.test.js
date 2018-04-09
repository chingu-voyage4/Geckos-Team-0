import React from 'react';
import { shallow, render} from 'enzyme';
import Header from '../components/header';

jest.useFakeTimers();
// test Header render()
describe('Header Component', () => {
  it('Should render header correctly', () => {
    const wrapper = shallow(<Header />);
    const header = {};

    expect(
      wrapper.exists(
        <header className="App__header" style={header}>
        </header>
      )
    ).toBe(true);
  });
  // test componentDidMount calling setInterval and setInterval calling randomImg
  it('timer that will call randomImg function fires', () => {
    const wrapper = shallow(<Header />);
    // creates a spy to spy on Header prototype randomImg
    const spy = jest.spyOn(Header.prototype, 'randomImg');
    // creates instance of randomImg
    wrapper.instance().randomImg();
    expect(setInterval).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
    
  });
});