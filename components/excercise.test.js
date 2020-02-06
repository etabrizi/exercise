import * as React from 'react';
import Excercise from './excercise';
import renderer from 'react-test-renderer';

const Props = {
    transcript: '<p>Here is some html<p>',
    infoToggle: () => { },
    title: 'Pull up'
}

describe('Excercise component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Excercise {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});







