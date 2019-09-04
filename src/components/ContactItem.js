import React, {Component} from 'react'

export default class ContactItem extends Component {
  render() {
    const {contact} = this.props

    return (
      <div className="contact-item-container">
        {contact.name}
      </div>
    )
  }
}
