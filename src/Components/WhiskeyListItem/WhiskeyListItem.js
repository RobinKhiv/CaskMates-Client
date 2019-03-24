import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './WhiskeyListItem.css'

export default class WhiskeyListItem extends Component {
  render() {
    const {whiskey} = this.props;
    return (
    <div className="col-3 WhiskeyList">
      <Link to={`/whiskeys/${whiskey.id}`} className='whiskeyListItem'>
      <div className="whiskeyListText">
        <h2>{whiskey.whiskeyName}</h2>
        <p> {whiskey.rating} </p>
      </div>
      </Link>
      <input type="button" name="addWhiskey" value="Add"/>
      <input type="button" name="reviewWhiskey" value="Review"/>
    </div>
    )
  }
}
