import React, { Component } from 'react'
import ContentContainer from '../containers/ContentContainer'
import Searchbar from './Searchbar'


// child of ...
export class Search extends Component {
  render() {
    return (
      <div>
        <Searchbar/>       
      </div>
    )
  }
}

export default Search
