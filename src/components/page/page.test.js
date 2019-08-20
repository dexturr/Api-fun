import React from 'react';
import Page from './page';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Card from '../card/card';

// TODO share
const hasText = (component, selector, text) => expect(component.find(selector).at(0).text()).to.equal(text);


describe('Page', () => {
    it('should render 2 cards', () => {
        const data = {
            generationmix: [
                {
                    fuel: 'Tea',
                    perc: 95,
                },
                {
                    fuel: 'Coke Zero',
                    perc: 5,
                },
                {
                    fuel: 'Coffee',
                    perc: 0,
                },
            ]
        }
        const comp = shallow(<Page data={data}/>);
        expect(comp.find(Card)).to.have.lengthOf(2);
    });
    it('should render a card for the highest and lowest values', () => {
        const data = {
            generationmix: [
                {
                    fuel: 'Tea',
                    perc: 95,
                },
                {
                    fuel: 'Coke Zero',
                    perc: 5,
                },
                {
                    fuel: 'Coffee',
                    perc: 0,
                },
            ]
        }
        const comp = mount(<Page data={data}/>);
        const cards = comp.find(Card);
        const highestCard = cards.at(0);
        const lowestCard = cards.at(1);

        hasText(highestCard, '.card-header', 'Highest');
        hasText(highestCard, '.card-title', 'Tea');
        hasText(highestCard, '.card-text', '95%');

        hasText(lowestCard, '.card-header', 'Lowest');
        hasText(lowestCard, '.card-title', 'Coffee');
        hasText(lowestCard, '.card-text', '0%');
    });
})