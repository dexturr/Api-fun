import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

// Mock out fetch API and write full acceptance tests

describe('App', function() {
    it('should render without crashing', function () {
        shallow(<App />);
    });
});