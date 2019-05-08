import React, { Component } from 'react'
import WhiskeySearchContext from '../../Context/WhiskeySearchContext';
import './WhiskeySearchForm.css'

export class WhiskeySearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    static contextType = WhiskeySearchContext;

    updateName(search) {
       this.context.filterWhiskeyList(search.toLowerCase());
       this.setState({search});
    }
   
  render() {
    
    return (
      <form className="whiskey-search-form">
        <label htmlFor="search">Search: </label>
        <input type="text" name="search" onChange={e => this.updateName(e.target.value)}/>
      </form>
    )
  }
}

export default WhiskeySearchForm
