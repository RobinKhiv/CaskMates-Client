import React, { Component } from 'react'
import './CheckedStar.css'

export default class CheckedStar extends Component {
    handleCheckedStar = value => {
      if(value === undefined)
        return ""
      return value.map((el, i) => <span className="fa fa-star checked" key={i}></span>);
    }
    
    render(){
    return (
      <React.Fragment>
        {this.handleCheckedStar(this.props.checkedStar)}
      </React.Fragment>
      )}
  }
  