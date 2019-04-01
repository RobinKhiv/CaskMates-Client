import React, { Component } from 'react';
import WhiskeySearchContext from '../Context/WhiskeySearchContext';
import WhiskeyApiService from '../Services/whiskey-api-service';
import WhiskeyListItem from '../Components/WhiskeyListItem/WhiskeyListItem'

export default class WhiskeyLookupPage extends Component {
  static contextType = WhiskeySearchContext

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
    return (
    <React.Fragment>
      <section className="whiskeyListPage row">
        {this.renderWhiskeys()}
      </section>
    </React.Fragment>
    )
  }
}
