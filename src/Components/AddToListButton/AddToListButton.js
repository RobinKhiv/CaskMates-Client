import React, { Component } from 'react'
import WhiskeyListContext from '../../Context/WhiskeyListContext'
import WhiskeyApiService from '../../Services/whiskey-api-service'

export default class AddToListButton extends Component {
  constructor(){
      super();
      this.state = {
          showAddMenu: false
      }
    }
      static contextType = WhiskeyListContext;

      showAddMenu = (e) => {
        e.preventDefault();
        this.setState({showAddMenu: true}, () => {
          document.addEventListener('mouseup', this.closeAddMenu)
        });
      }
      
      closeAddMenu = e => {
        e.stopPropagation();
        this.setState({showAddMenu: false}, () => {
          document.removeEventListener('mouseup', this.closeAddMenu)
        })
      }
    
      addToList = (whiskey_Id, list_id) => {
        WhiskeyApiService.addToList(whiskey_Id, list_id)  
      }  
  
  render() {
    return (
        <React.Fragment>

        <input type="button" name="addWhiskey" value="Add" onMouseDown={this.showAddMenu}/>
        {this.state.showAddMenu ? (
            <div className="menu" >
          <input type="button" name="FavoriteLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 1)} value="Favorite List"/><br/>
          <input type="button" name="alreadyTriedLst" onMouseUp={()=> this.addToList(whiskey.whiskey_id, 3)} value="Already Tried List"/><br/>
          <input type="button" name="wishLst" onMouseUp={() => this.addToList(whiskey.whiskey_id, 2)} value="Wish List"/>
        </div>) : ""}
        </React.Fragment>
    )
  }
}
