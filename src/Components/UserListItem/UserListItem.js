import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './UserListItem.css'
import WhiskeyApiService from '../../Services/whiskey-api-service';
import WhiskeyListContext from '../../Context/WhiskeyListContext';

export default class UserListItem extends Component {
  constructor(){
    super();
    this.state={
      showMoveMenu: false
    }
  }
  static contextType = WhiskeyListContext;

  showMoveMenu = (e) => {
    e.preventDefault();
    this.setState({showMoveMenu: true}, () => {
      document.addEventListener('click', this.closeMoveMenu)
    });
  }
  
  closeMoveMenu = e => {
    e.stopPropagation();
    this.setState({showMoveMenu: false}, () => {
      document.removeEventListener('click', this.closeMoveMenu)
    })
  }

  moveToList = (whiskey_Id, newlist_name, currentListID, updatedListName) => {
    WhiskeyApiService.moveToList(whiskey_Id, newlist_name, currentListID)  
    .then(() => this.context.updateWhiskeyListState(currentListID, updatedListName))
  }

  deleteFromList = (list_id) => {
    WhiskeyApiService.removeWhiskeyFromApi(list_id)
    .then(() => this.context.removeWhiskeyFromState(list_id))
  }

  render() {
    const {whiskey} = this.props;
    return (
    <div className="col-3 WhiskeyList"style={{backgroundImage: `url(${whiskey.image})`}}>
      <div className='listText'>
        <Link to={`/whiskeys/${whiskey.whiskey_id}`} className='whiskeyListItem'>
          <div className="whiskeyListText">
              <h2 className='whiskeyListName'>{whiskey.whiskeyName}</h2>
          </div>
        </Link>
      </div>
      <input type="button" name="moveWhiskey" className="moveButton" value="Move To" onClick={this.showMoveMenu}/>
        {this.state.showMoveMenu && (
          <div className="moveMenu" >
            <input type="button" className="moveSelectionButton" name="FavoriteLst" onClick={() => this.moveToList(whiskey.whiskey_id, 1, whiskey.id, 'Favorite List')} value="Favorite List"/>
            <input type="button" className="moveSelectionButton" name="wishLst" onClick={() => this.moveToList(whiskey.whiskey_id, 2,whiskey.id, 'Wish List')} value="Wish List"/>
            <input type="button" className="moveSelectionButton" name="alreadyTriedLst" onClick={()=> this.moveToList(whiskey.whiskey_id, 3,whiskey.id, 'Already Tried')} value="Already Tried List"/>
          </div>)
        }
      <input type="button" name="delete" className="deleteBtn" onClick={() =>this.deleteFromList(whiskey.id)}value="Remove"/>
    </div>
    )
  }
}



