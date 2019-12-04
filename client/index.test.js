import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

import App from './index';
import sampleData from './assets/sampleData';


describe('Should mount with data ready to be displayed', () => {
  it('should have access to an array of data for homes', () => {
    const wrapper = shallow(<App sampleData={sampleData} />);
    const span = wrapper.find('span');
    expect(true).toBe(true);
    expect(span.hasClass('main')).toBe(true);
    expect(typeof wrapper.state().rawData).toBe('object');
    expect(typeof wrapper.state().centerIndex).toBe('number');
  });
});