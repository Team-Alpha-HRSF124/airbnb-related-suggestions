import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });
import TestComponent from './testComponent';

describe('Should behave expectedly', () => {
  it('should render expected texts', () => {
    const wrapper = shallow(<TestComponent />);
    const text = wrapper.find('div div');
    const text2 = wrapper.find('div span');
    expect(text.text()).toBe("Hello!");
    // expect(text2.text()).toBe("Hello To You Too!");
  });
});