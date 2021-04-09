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
        Hi My name is Cesario Mendoza. Im a big football fan so I wanted to make an application for a football fan like myself. 
      </div>
    )
  }
}

export default About
