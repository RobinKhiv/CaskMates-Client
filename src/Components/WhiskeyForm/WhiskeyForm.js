import React, { Component } from 'react'
import whiskeysService from '../../Services/whiskey-api-service';
import './WhiskeyForm.css'

export default class WhiskeyForm extends Component {
  onSubmit = e => {
      e.preventDefault();
      const {drinkName, drinkImage, origin, abv, price, content, nose, palate, finish} = e.target;
      whiskeysService.postWhiskey(
        drinkName.value, 
        drinkImage.value, 
        origin.value, 
        parseFloat(abv.value), 
        parseFloat(price.value), 
        content.value, 
        nose.value, 
        palate.value, 
        finish.value)
      .then(whiskeyId => this.props.onAddSuccess(whiskeyId))
  }
  
  render() {

    return (
      <form onSubmit={this.onSubmit} className="newWhiskey-form col-6">
        <h1 className="whiskeyFormTitle">Add a Drink</h1>
        <label htmlFor="drinkName">Drink: </label>
        <input type="text" name="drinkName" id="drinkname"className='wide'/><br/>
        <label htmlFor='drinkImage'>Image Link: </label>
        <input type="text" name="drinkImage" id="drinkImage"/><br/>
        <label htmlFor="origin">Origin: </label>
        <input type="text" name="origin" id="origin"/><br/>
        <label htmlFor="abv">Abv: </label>
        <input type="text" name="abv" id="abv"/><br/>
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" id="price"/><br/>
        <label htmlFor="content">Description: </label>
        <input type="text" name="content" id="content"/><br/>
        <label htmlFor="nose">Nose: </label>
        <input type="text" name="nose" id="nose"/><br/>
        <label htmlFor="palate">Palate: </label>
        <input type="text" name="palate" id="palate"/><br/>
        <label htmlFor="finish">Finish: </label>
        <input type="text" name="finish" id="finish"/><br/>
        <input type="submit" name="submit" id="submit-btn" value="submit"/>
        <input type="button" value="Cancel" id="cancel-btn"></input>
      </form> 
    )
  }
}
