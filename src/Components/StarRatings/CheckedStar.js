import React, { Component } from 'react'
import './CheckedStar.css'

export default class CheckedStar extends Component {
    handleCheckedStar = value => {
      if(value === undefined)
        return ""
      return value.map(el => <span className="fa fa-star checked"></span>);
    }
    
    render(){
    return (
      <React.Fragment>
        {this.handleCheckedStar(this.props.checkedStar)}
      </React.Fragment>
      )}
  }
  