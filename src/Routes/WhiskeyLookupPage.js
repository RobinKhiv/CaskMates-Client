import React, { Component } from 'react';
import WhiskeySearchContext from '../Context/WhiskeySearchContext';
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem';
import WhiskeySearchForm from '../Components/WhiskeySearchForm/WhiskeySearchForm';
import loadingpic from '../../src/loading picture/loading.gif';

export default class WhiskeyLookupPage extends Component {
  static contextType = WhiskeySearchContext
 
  componentDidMount() {   
    this.context.clearError()
    WhiskeyApiService.getWhiskeys()
      .then(this.context.setWhiskeyList)
      .catch(this.context.setError)
  }

  renderWhiskeys () {
    const {whiskeyFilter = [] } =this.context;    
    return whiskeyFilter.map(whiskey =>
      <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>
      )
  }
  renderLoading(){
    return (
      <img className='col-3' src={loadingpic} alt='dripping alcohol'></img>
    )
  }

  render() {
    const {whiskeyFilter } =this.context; 
    return (
    <React.Fragment>
      <header className="whiskey-search-container row">
        <WhiskeySearchForm/>
      </header>
      <section className="whiskeyListPage row">
        {!whiskeyFilter.length && this.renderLoading()}
        {this.renderWhiskeys()}
      </section>
    </React.Fragment>
    )
  }
}
