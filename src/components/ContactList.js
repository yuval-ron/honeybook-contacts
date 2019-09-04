import React, {Component} from 'react'

export default class ContactList extends Component {
  render() {
    const {contacts} = this.props
    console.log('ContactList.js contacts', contacts)

    return (
      <div id="contacts-list-container">
        {contacts.map((contact) => {
          return <div key={contact.email}>{contact.name}</div>
        })}
      </div>
    )
  }
}
