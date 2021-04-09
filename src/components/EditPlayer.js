import React, { Component } from 'react'
import PlayerModel from '../models/player'

export class EditPlayer extends Component {
  
  state = {
    name: this.props.name,
    team: this.props.team,
    age: this.props.age,
    photo: this.props.photo,
  }

  handleSubmit = (e) => {
    // e.preventDefault()

    PlayerModel.update(this.props.playerId, this.state)
      .then(data => {
          console.log(data)
      })
  }

  handleChange = (e) => {
    // if(e.target.type !== "text") {
    //   this.setState({ })
    // }

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  
  
  render() {
    return (
      <div class="component-content">
        <h2 style={{textAlign:"center"}}>New Player</h2>
        <form onSubmit={this.handleSubmit}>

          <div className="form-input">
            <label htmlFor="title">Name</label>
            <input 
              type="text" 
              name="name" 
              onChange={this.handleChange}
              value={this.state.name} />
          </div>

          <div className="form-input">
            <label htmlFor="publisher">Team</label>
            <input 
              type="text" 
              name="team" 
              onChange={this.handleChange}
              value={this.state.team} />
          </div>

          <div className="form-input">
            <label htmlFor="completed">Age</label>
            <input 
              type="text" 
              id="age" 
              onChange={this.handleChange} 
              value={this.state.age} />
          </div>

          <div className="form-input">
            <label htmlFor="coverArtUrl">Image URL</label>
            <input 
              type="text" 
              name="photo" 
              onChange={this.handleChange}
              value={this.state.photo} />
          </div>

          <input type="submit" value="Save!"/>
        </form>
      </div>
    )
  }
}

export default EditPlayer
