import React from 'react';
import App from './app';
import { shallow } from 'enzyme';

describe('App', function() {
    it('should render without crashing', function () {
        shallow(<App />);
    });
});