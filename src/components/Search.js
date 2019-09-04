import React, {Component} from 'react'

import './Search.scss'

export default class Search extends Component {
  state = {
    isInputVisible: false
  }

  handleButtonClick = () => {
    const {isInputVisible} = this.state

    this.setState({isInputVisible: !isInputVisible})
  }

  render() {
    const {searchQuery, handleSearchQueryChange} = this.props
    const {isInputVisible} = this.state

    return (
      <div id="search-container">
        <div className={`input-container ${isInputVisible && 'visible'}`}>
          <input
            type="text"
            placeholder="Enter your search"
            onChange={handleSearchQueryChange}
            value={searchQuery}
          />
        </div>
        <div className="search-button" onClick={this.handleButtonClick}>
          <img className="icon" alt="" src="search-icon.svg" />
        </div>
      </div>
    )
  }
}
