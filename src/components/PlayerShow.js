import React, { Component } from 'react'
import PlayerModel from '../models/player'
import EditPlayer from './EditPlayer'

export class PlayerShow extends Component {
  
  
// setting more things into state

  state = {
    name: "",
    team: "",
    age: 0,
    photo: "Add a photo!",
    toggleEdit: false
  }

  componentDidMount() {
    console.log("playershow")
    console.log("age:::::", this.state.age, typeof this.state.age)
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

  editToggle = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }


  updateAfterEdit = (passedInData) => {
    this.setState({
      name: passedInData.player.name,
      team: passedInData.player.team,
      age: passedInData.player.age,
      photo: passedInData.player.photo
    })
  }

  handleDelete = () => {
    PlayerModel.destroy(this.props.match.params.id)
      .then(res => {
        this.props.history.push("/players")
      })
  }
  
  render() {
    return (
      <div>
        <h1 style={{marginTop:"10px"}}>
          {!this.state.photo ? this.textContent="Add a player photo!" : <img className="player-show-image" width="450" height="250" src={this.state.photo} />}
        </h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Team: {this.state.team}</h1>
        <h1>Age: {this.state.age}</h1>
        <h1><button className="btn" onClick={this.editToggle}>Edit</button><button onClick={this.handleDelete} style={{marginLeft:"30px"}} className="btn">Delete</button></h1>
        {this.state.toggleEdit && <EditPlayer updateAfterEdit={this.updateAfterEdit} name={this.state.name} team={this.state.team} age={this.state.age} photo={this.state.photo} playerId={this.props.match.params.id}/>}
      </div>
    )
  }
}

export default PlayerShow
