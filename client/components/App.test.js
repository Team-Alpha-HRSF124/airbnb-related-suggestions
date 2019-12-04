import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './App';
import sampleData from '../assets/sampleData';


describe('Should mount with data ready to be displayed', () => {
  const wrapper = shallow(<App sampleData={sampleData} />);
  it('should have access to an array of data for homes', () => {
    const span = wrapper.find('span');
    expect(true).toBe(true);
    expect(span.hasClass('main')).toBe(true);
    expect(typeof wrapper.state().rawData).toBe('object');
    expect(typeof wrapper.state().centerIndex).toBe('number');
  });
});

describe('Should have functions that alters the state expectedly', () => {
  const wrapper = shallow(<App sampleData={sampleData} />);
  const instance = wrapper.instance();
  it('right arrow on click should increment the state', () => {
    expect(wrapper.state().centerIndex).toBe(1);
    instance.handleRightArrowClick();
    expect(wrapper.state().centerIndex).toBe(2);
  });

  it('left arrow on click should decrement the state', () => {
    instance.handleLeftArrowClick();
    expect(wrapper.state().centerIndex).toBe(1);
  });
  
  it('left arrow on click should not decrement the state lower than 1', () => {
    instance.setState({ centerIndex: 1 });
    instance.handleLeftArrowClick();
    expect(wrapper.state().centerIndex).toBe(1);
  });

  it('right arrow on click should not increment the state higher than the length of the given data - 2', () => {
    const maxAllowableCenterIndex = sampleData.length - 2;
    instance.setState({ centerIndex: maxAllowableCenterIndex });
    instance.handleRightArrowClick();
    expect(wrapper.state().centerIndex).toBe(maxAllowableCenterIndex);
  });
});