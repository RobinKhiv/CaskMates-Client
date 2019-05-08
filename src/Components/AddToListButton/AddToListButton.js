import React, { Component } from 'react';
import WhiskeyApiService from '../../Services/whiskey-api-service';

export class AddToListButton extends Component {
  constructor(){
    super();    
    this.state = {
      showAddMenu: false
    }
  }
 
  addToList(list_id) {
    const {id} = this.props;
    WhiskeyApiService.addToList(id, list_id)  
  }

  showAddMenu = (e) => {
    e.preventDefault();
    this.setState({showAddMenu: true}, () => {
      document.addEventListener('click', this.closeAddMenu)
    });
  }
  
  closeAddMenu = e => {
    e.stopPropagation();
    this.setState({showAddMenu: false}, () => {
      document.removeEventListener('click', this.closeAddMenu)
    })
  }

  renderListButtons(){
    return (
      <div className="dropdown-content">
        <input type="button" name="FavoriteLst" className='add-selection' onClick={() => this.addToList(1)} value="Favorite List"/>
        <input type="button" name="wishLst" className='add-selection' onClick={() => this.addToList(2)} value="Wish List"/>
        <input type="button" name="alreadyTriedLst" className='add-selection triedLst' onClick={() => this.addToList(3)} value="Already Tried List"/>
      </div>
    )
  }

  render() {
    const showAddMenu = this.state.showAddMenu;
    return (
      <div className="addToListButton">
        <input type="button" className="dropdown-add-btn" name="addWhiskey" value="Add" onClick={this.showAddMenu}/>
        {showAddMenu && this.renderListButtons()}
      </div>
    )
  }
}

export default AddToListButton
