import React, { Component } from 'react'
import PlayerList from '../components/PlayerList'
import About from '../components/About'

export class ContentContainer extends Component {
  
  componentDidMount() {
    console.log("content container mounted")
    console.log("=========", this.props.playerData)
  }
  
  
  render() {
    return (
      <div>        
         <div className="component-content">
           {this.props.playerLinks}
         </div>
      </div>
    )
  }
}

export default ContentContainer
