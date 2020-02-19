import * as React from 'react';
import Exercise from './exercise';
import renderer from 'react-test-renderer';

const Props = {
    transcript: '<p>Here is some html<p>',
    infoToggle: () => { },
    title: 'Pull up'
}

describe('Exercise component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Exercise {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});







