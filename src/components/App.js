import React, {Component} from 'react';

import Navbar from './Navbar'
import Loading from './Loading'
import ContactList from './ContactList'
import {fetchContacts} from '../services/api'
import './App.scss';

class App extends Component {
  state = {
    contacts: null
  }

  componentDidMount() {
    // NOTICE: This info should be saved on a reducer and fetched using an action.
    // The reason we are not using Redux and Thunk is becouse it is a small project,
    // And for now it is out of scope.
    fetchContacts().then((contacts) => {
      this.setState({contacts})
    })
  }

  render() {
    const {contacts} = this.state

    return (
      <div className="App">
        <Navbar />
        {contacts ?
          <ContactList contacts={contacts} />
          :
          <Loading />
        }
      </div>
    );
  }
}

export default App;
