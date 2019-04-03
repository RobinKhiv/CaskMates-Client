import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './Navigation';

describe('<Navigation />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});