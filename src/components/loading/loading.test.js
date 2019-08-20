import React from 'react';
import Loading from './loading';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('Loading', () => {
    it('should render the loading spinner', () => {
        const comp = shallow(<Loading />);
        const spinner = comp.find('.lds-spinner');
        expect(spinner).to.have.lengthOf(1);
    });
});