import React, { Component } from 'react'
import myPhoto from '../me.jpg'
import {Link} from 'react-router-dom'

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
      <div className="component-content about"> 
        Hi My name is <strong>Cesario Mendoza</strong>. I am a front-end website developer. When it comes to sports Im a big fan of football so I created "the sideline". I wanted to make an application where football fans like myself can add and store information regarding football players of their choice.  I hope that you can enjoy and utilize this application for whatever your football needs may be!
        <img className="about-photo" src={myPhoto} />
        <br/>
        <br/>
        <h4><a href="https://github.com/mightycesario/" target="_blank">Github</a></h4>
        <h4><a href="https://www.linkedin.com/in/cesario-mendoza-flores/" target="_blank">Linkedin</a></h4>
      </div>
    )
  }
}

export default About
