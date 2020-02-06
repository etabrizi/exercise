import * as React from 'react';
import Controls from './Controls';
import renderer from 'react-test-renderer';

const Props = {
    counterDecrease: () => { },
    counterIncrease: () => { },
    toggleInfo: true,
    gender: 'male',
    toggleGender: () => { },
    infoToggle: () => { },
    searchToggle: true,
    toggleSearch: () => { },
    closeAll: () => { }
}

describe('Controls component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Controls {...Props} />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});







