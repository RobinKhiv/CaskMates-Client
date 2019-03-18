import React, { Component } from 'react'

export default class WhiskeyForm extends Component {
  onSubmit = e =>{
      e.preventDefault();
      console.log('test');
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Add a Drink</h1>
        <label htmlFor="drinkName">Drink: </label>
        <input type="text" name="drinkName" id="drinkname"/><br/>
        <label htmlFor="origin">Origin: </label>
        <input type="text" name="origin" id="origin"/><br/>
        <label htmlFor="abv">Abv: </label>
        <input type="text" name="abv" id="abv"/><br/>
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" id="price"/><br/>
        <label htmlFor="desc">Description: </label>
        <input type="text" name="desc" id="desc"/><br/>
        <input type="submit" name="submit" id="submit-btn" value="submit"/>
        <input type="button" value="Cancel" id="cancel-btn"></input>
      </form> 
    )
  }
}
