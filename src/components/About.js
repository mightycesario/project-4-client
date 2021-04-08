import React, { Component } from 'react'

export class About extends Component {
  
  state = {
    test: []
  }


  componentDidMount() {
    console.log("about mounted")
    this.setState({
      test: ["testelement"]
    })
  }




  
  
  render() {
    return (
      <div>
        From about component {this.textContent = this.state.test ? this.state.test : "nothing"}
      </div>
    )
  }
}

export default About
