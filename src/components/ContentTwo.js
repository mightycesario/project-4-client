import React, { Component } from 'react'

export class ContentTwo extends Component {
  
  componentDidMount() {
    console.log("content two mounted")
  }
  
  render() {
    return (
      <div>
       From contenttwo component
      </div>
    )
  }
}

export default ContentTwo
