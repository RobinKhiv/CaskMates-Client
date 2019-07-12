import React, { useContext, useEffect } from 'react';
import WhiskeySearchContext from '../Context/WhiskeySearchContext';
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem';
import WhiskeySearchForm from '../Components/WhiskeySearchForm/WhiskeySearchForm';
import loadingpic from '../../src/loading picture/loading.gif';

const whiskeyLookupPage = props => {
  const whiskeys = useContext(WhiskeySearchContext);

  useEffect(() => {
    whiskeys.clearError()
    WhiskeyApiService.getWhiskeys()
      .then(whiskeys.setWhiskeyList)
      .catch(whiskeys.setError)
  }, []);

  const renderWhiskeys = () => { 
    return whiskeys.whiskeyFilter.map(whiskey =>
      <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>
      )
  }

  const renderLoading = ()=>{
    return (
      <img className='col-3' src={loadingpic} alt='dripping alcohol'></img>
    )
  }

  return (
    <React.Fragment>
      <header className="whiskey-search-container row">
        <WhiskeySearchForm/>
      </header>
      <section className="whiskeyListPage row">
        {!whiskeys.whiskeyFilter.length && renderLoading()}
        {renderWhiskeys()}
      </section>
    </React.Fragment>
    )
}
export default whiskeyLookupPage;