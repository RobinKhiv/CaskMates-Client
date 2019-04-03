import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Registration from './Registration';

describe('<Registration />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <Registration /> , div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(<Registration />)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});