import React, { Component } from 'react'

export default class WhiskeyFilterForm extends Component {
  render() {
    return (
    <form>
        <label htmlFor="origin">Origin: </label>
        <select name="origin" id="origin">
            <option value='default'> </option>
            <option value="scotch">Scottland</option>
            <option value="whiskey">United States</option>
            <option value="irish-whiskey">Ireland</option>
        </select>
        <div className="filterBy">
          <label htmlFor="filter">Filter By: </label>
          <select name="filter" id="filter">
            <option value="">Highest Review</option>
            <option value="">Lowest Review</option>
            <option value="">My reviews</option>
          </select><br/>
        </div>
        <label htmlFor="search">Search: </label>
        <input type="text" name="search"/>
        <input type="submit" value="Search"/>
    </form>
    )
  }
}
