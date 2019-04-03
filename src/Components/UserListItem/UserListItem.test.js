import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import UserListItem from './UserListItem';

describe('<UserListItem />', () => {
    const whiskey = {
        whiskey_id: 1,
        image: 'https',
        whiskeyName: 'name',
    };
    it('renders without crashing', () => { 
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <UserListItem whiskey={whiskey}/>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <UserListItem whiskey={whiskey}/>
        </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});