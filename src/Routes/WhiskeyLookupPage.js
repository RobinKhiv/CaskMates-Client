import React, { Component } from 'react';
import WhiskeyListContext from '../Context/WhiskeyListContext';
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem'

export default class WhiskeyLookupPage extends Component {
  static contextType = WhiskeyListContext

  componentDidMount() {
    this.context.clearError()
    WhiskeyApiService.getWhiskeys()
      .then(this.context.setWhiskeyList)
      .catch(this.context.setError)
  }

  renderWhiskeys () {
    const { whiskeyList=[] } =this.context;
    
    return whiskeyList.map(whiskey =>
      <WhiskeyListItem key={whiskey.id} whiskey={whiskey}/>
      )
  }

  render() {
    // const { error } = this.context
    return (
      <section className="whiskeyListPage row">
        {this.renderWhiskeys()}
      </section>
    )
  }
}
