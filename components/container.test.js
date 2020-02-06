import * as React from 'react';
import Container from './Container';
import renderer from 'react-test-renderer';

const Props = {
    img: 'path-to-img-url',
    infoToggle: true
}

describe('Container component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Container {...Container} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});

