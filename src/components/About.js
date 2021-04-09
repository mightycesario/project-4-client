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
      <div className="component-content"> 
        Hi My name is Cesario Mendoza. Im a big football fan so I wanted to make an application where people can add and store information regarding football players for football fans like myself. 
      </div>
    )
  }
}

export default About
