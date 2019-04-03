import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import WhiskeyListItem from './WhiskeyListItem';

describe('<WhiskeyListItem />', () => {
    const whiskey = {
        whiskey_id: 1,
        image: 'https',
        whiskey_name: 'name',
    };
    it('renders without crashing', () => { 
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <WhiskeyListItem whiskey={whiskey}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <WhiskeyListItem whiskey={whiskey}/>
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});