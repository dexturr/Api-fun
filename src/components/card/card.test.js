import React from 'react';
import { mount } from 'enzyme';
import Card from './card';
import { expect } from 'chai';

const hasText = (component, selector, text) => expect(component.find(selector).at(0).text()).to.equal(text);

describe('Card', () => {
    it('Should render header, energyType and value', () => {
        const comp = mount(<Card header='Foo' energyType='Bar' value='Baz' />);
        hasText(comp, '.card-header', 'Foo');
        hasText(comp, '.card-title', 'Bar');
        hasText(comp, '.card-text', 'Baz');
    });
});