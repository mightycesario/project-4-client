import React, { Component } from 'react'
import PlayerModel from '../models/player'

export class PlayerShow extends Component {
  
  
// setting more things into state

  state = {
    name: "",
    team: "",
    age: "",
    photo: ""
  }


  componentDidMount() {
    console.log("playershow")
    this.fetchData()
  }

  // grab the id of the player
  fetchData = () => {
    PlayerModel.show(this.props.match.params.id)
      .then(res => {
        console.log("RES", res)
        this.setState({
          name: res.player.name,
          team: res.player.team,
          age:  res.player.age,
          photo: res.player.photo
        })
      })
  }
  
  render() {
    return (
      <div>
        <h1 style={{marginTop:"10px"}}><img width="450" height="250" src={this.state.photo} /></h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.team}</h1>
        <h1>{this.state.age}</h1>
        <h1><button  className="btn">Edit Player</button></h1>
      </div>
    )
  }
}

export default PlayerShow
