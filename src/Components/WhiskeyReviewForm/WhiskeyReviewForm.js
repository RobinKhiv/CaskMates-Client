import React, { Component } from 'react'

export default class WhiskeyReviewForm extends Component {
  render() {
    return (
      <form>
        <h2>Review for Macallan</h2>
        <label>Rating: </label>
        <select name="" id="">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select><br/>
        <label>Nose: </label>
        <input type="text"/><br/>
        <label>Tasting: </label>
        <input type="text"/><br/>
        <label>Additional Comments: </label>
        <input type="text"/><br/>
        <input type="submit" name="submit" value="submit"/>
        <input type="button" value="Cancel"/>
      </form>
    )
  }
}
