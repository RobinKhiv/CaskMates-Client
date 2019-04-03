import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CheckedStar from './CheckedStar';

describe('<CheckedStar />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <CheckedStar /> , div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(<CheckedStar />)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});