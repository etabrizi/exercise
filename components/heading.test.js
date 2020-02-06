import * as React from 'react';
import Heading from './heading';
import renderer from 'react-test-renderer';

const Props = {
    title: "Pull up",
    infoToggle: true,
    searchToggle: true

}

describe('Heading component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Heading {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});







