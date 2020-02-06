import * as React from 'react';
import MainApp from './mainApp';
import renderer from 'react-test-renderer';

const Props = {
    work: [{}, {}, {}]
}

describe('MainApp component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MainApp {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});   
