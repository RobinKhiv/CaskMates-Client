import React, { Component } from 'react';
import WhiskeySearchContext from '../Context/WhiskeySearchContext';
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem';
import WhiskeySearchForm from '../Components/WhiskeySearchForm/WhiskeySearchForm';

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

  render() {
    return (
    <React.Fragment>
      <header className="whiskey-search-container row">
        <WhiskeySearchForm/>
      </header>
      <section className="whiskeyListPage row">
        {this.renderWhiskeys()}
      </section>
    </React.Fragment>
    )
  }
}
