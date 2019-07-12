import React, { useState, useContext, useEffect } from 'react'
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import UserListItem from '../Components/UserListItem/UserListItem';
import './ListPage.css'

const listPage = () => {
  const [currentView, setView] = useState('');
  const whiskeyList = useContext(WhiskeyListContext);
  const {favoriteList, wishList, alreadyTried} = whiskeyList;

  useEffect(() => {
    WhiskeyApiService.getWhiskeyList()
    .then(whiskeys => 
      whiskeyList.setWhiskeyList(whiskeys))
    .catch(whiskeyList.setError)
  }, [])

  const handleListRender = list => {
    setView(list);
  }
  
  const renderList = list => {
    return list.map(whiskey=> <UserListItem key={whiskey.id} whiskey={whiskey}/>)
  }

  return (
    <React.Fragment>
      <header className="row">
        <form className="list-selection-form col-12">
          <label htmlFor="list-selection">Select Your List</label>
          <div className="list-selection-button-container">
            <button type="button" name="list-selection" onClick={() => handleListRender('Favorite List')}>Favorite List</button>
            <button type="button" name="list-selection" onClick={() => handleListRender('Wish List')}>Wish List</button>
            <button type="button" name="list-selection" onClick={() => handleListRender('Already Tried List')}>Already Tried</button>
          </div>
        </form>
      </header>
      <section className='row'>
        <div className="userListTitle col-12">
         <h2>{currentView}</h2>
        </div>
        {currentView === 'Favorite List' && renderList(favoriteList)}
        {currentView === 'Wish List' && renderList(wishList)}
        {currentView === 'Already Tried List' && renderList(alreadyTried)}
      </section>
    </React.Fragment>
  )
}
export default listPage;