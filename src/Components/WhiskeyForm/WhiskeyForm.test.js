import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import WhiskeyForm from './WhiskeyForm'

describe('<WhiskeyForm />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <WhiskeyForm /> , div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(<WhiskeyForm />)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});