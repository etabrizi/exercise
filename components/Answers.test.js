import * as React from 'react';
import Answer from './Answers';
import renderer from 'react-test-renderer';

const Props = {
    content : "this is an answer",
    getValue: () => {},
    disabled: true,
    flag: true,
    correctAnswer : [{}],
    key: "this is an answer"
  }
  
describe('Answer component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Answer {...Props}/>)
            .toJSON();
        expect(tree).toMatchSnapshot()
    });
});   