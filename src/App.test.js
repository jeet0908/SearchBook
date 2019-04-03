import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App").length).toBe(1);
  });
});

it("Should show state value on change event in App component", () => {
   const component = shallow(<App />);
   const inputValue = 'harryPotter';
    const form = component.find('FormControl');
    // when
    form.props().onChange({target: {
       value: inputValue
    }});
    // then
    expect(component.state('query')).toBe(inputValue);
});
