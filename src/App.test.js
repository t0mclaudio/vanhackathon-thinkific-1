import React from 'react';
import expect from 'expect';

import { configure, mount } from 'enzyme';

import App from './App';

import Adapter from 'enzyme-adapter-react-16';
import { Router, Link } from 'react-router-dom';

configure({ adapter: new Adapter() });


describe('Test AppComponent', () => {
  it('Mounts', () => {
    const wrapper = mount(<App />)
    expect(true).toBeTruthy();
  }),

  it('Has correct Routes', () => {
    const wrapper = mount(<App />);
    let links = wrapper.find(Link);
    let router = wrapper.find(Router)
    expect(links.length).toEqual(1);
    expect(router.length).toEqual(1);
  })
})