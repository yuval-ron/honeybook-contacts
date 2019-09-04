import React, {Component} from 'react';

import Navbar from './Navbar'
import Loading from './Loading'
import ContactList from './ContactList'
import Search from './Search'
import {fetchContacts} from '../services/api'
import './App.scss';

class App extends Component {
  state = {
    filteredContacts: null,
    searchQuery: ''
  }

  componentDidMount() {
    // NOTICE: This info should be saved on a reducer and fetched using an action.
    // The reason we are not using Redux and Thunk is becouse it is a small project,
    // And for now it is out of scope.
    fetchContacts().then((contacts) => {
      this.contacts = contacts
      this.setState({filteredContacts: contacts})
    })
  }

  handleSearchQueryChange = (e) => {
    const {target: {value}} = e

    const filteredContacts = this.contacts.filter(contact => contact.name.toLowerCase().includes(value))

    this.setState({searchQuery: value, filteredContacts})
  }

  render() {
    const {filteredContacts, searchQuery} = this.state

    return (
      <div className="App">
        <Navbar />
        {filteredContacts ?
          <ContactList contacts={filteredContacts} />
          :
          <Loading />
        }
        <Search
          searchQuery={searchQuery}
          handleSearchQueryChange={this.handleSearchQueryChange}
        />
      </div>
    );
  }
}

export default App;
