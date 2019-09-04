import React, {Component} from 'react';
import {debounce} from 'lodash'

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

  debouncedFilterContacts = debounce((value) => {
    const filteredContacts = this.contacts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

    this.setState({filteredContacts})
  }, 500)

  handleSearchQueryChange = (e) => {
    const {target: {value}} = e

    this.setState({searchQuery: value})
    this.debouncedFilterContacts(value)
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
