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
      <form onSubmit={this.onSubmit} className="newWhiskey-form col-4">
        <h1 className="whiskeyFormTitle">Add a Drink</h1>
        <label htmlFor="drinkName">Whiskey Name: </label>
        <input type="text" name="drinkName" id="drinkname" required/>
        <label htmlFor='drinkImage'>Image Link: </label>
        <input type="text" name="drinkImage" id="drinkImage"/>
        <label htmlFor="origin">Origin: </label>
        <input type="text" name="origin" id="origin"/>
        <label htmlFor="abv">Abv: </label>
        <input type="text" name="abv" id="abv"/>
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" id="price"/>
        <label htmlFor="content">Description: </label>
        <textarea type="text" name="content" id="content" rows="2"required/>
        <label htmlFor="nose">Nose: </label>
        <input type="text" name="nose" id="nose" required/>
        <label htmlFor="palate">Palate: </label>
        <input type="text" name="palate" id="palate" required/>
        <label htmlFor="finish">Finish: </label>
        <input type="text" name="finish" id="finish" required/>
        <input type="submit" name="submit" id="submit-btn" value="submit"/>
      </form> 
    )
  }
}
