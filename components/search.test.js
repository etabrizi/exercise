import * as React from 'react';
import Search from './search';
import renderer from 'react-test-renderer';

const Props = {
    excercises: [{}, {}, {}],
    searchTerm: 'pull ups',
    updateCard: () => { },
    getSearchValue: () => { },
    searchToggle: true
}

describe('Search component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Search {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});   
