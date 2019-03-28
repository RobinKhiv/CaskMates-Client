import React, { Component } from 'react'
import WhiskeyForm from '../Components/WhiskeyForm/WhiskeyForm'

export default class AddWhiskeyPage extends Component {
  handleAddWhiskeySuccess = (whiskeyId) => {
    this.props.history.push(`/whiskeys/${whiskeyId}`)
  }
  render() {
    return (
      <section className='new-whiskey-form container row'>
        <WhiskeyForm onAddSuccess={this.handleAddWhiskeySuccess}/>
      </section>
    )
  }
}
