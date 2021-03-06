import React, {Component} from 'react'

import ContactItem from './ContactItem'
import './ContactList.scss'

export default class ContactList extends Component {
  render() {
    const {contacts} = this.props

    return (
      <div id="contacts-list-container">
        {contacts.map((contact) => {
          return <ContactItem key={contact.email} contact={contact} />
        })}
      </div>
    )
  }
}
