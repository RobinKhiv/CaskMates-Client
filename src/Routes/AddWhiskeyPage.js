import React, { Component } from 'react'
import WhiskeyForm from '../Components/WhiskeyForm/WhiskeyForm'

export default class AddWhiskeyPage extends Component {
  handleAddWhiskeySuccess = (whiskeyId) => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(`/whiskeys/${whiskeyId}`)
  }
  render() {
    return (
      <React.Fragment>
        <WhiskeyForm onAddSuccess={this.handleAddWhiskeySuccess}/>
      </React.Fragment>
    )
  }
}
