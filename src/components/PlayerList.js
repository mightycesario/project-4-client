import React, { Component } from 'react'
import {Link} from 'react-router-dom'

// import for our API request functions
import PlayerModel from '../models/player'
import PlayerCard from '../components/PlayerCard'
import ContentContainer from '../containers/ContentContainer'

export class PlayerList extends Component {

  state = {
    players: [],
    playerLinks: []
  }

  componentDidMount() {
    console.log("Playerlist mounted")
    console.log("in didMount hook:", this.state.players)
    this.fetchData()
    console.log()
  }

  fetchData = () => {
    PlayerModel.all()
      .then(data => {
        console.log("fetchData call AFTER hook", data) 
        let playerList = data.player !== undefined 
        ? 
          data.player.map((player, index) => {
            return (<Link to={`/players/${player._id}`} className={"nav-links"} key={index}>
                      <h4>{player.name}</h4>
                    </Link>) //<PlayerCard {...player}/>
          }) 
        : 
          <></>
        console.log(playerList)
        this.setState({ playerLinks: playerList, players: data.player})
      }) 
  }

  componentDidUpdate() {
    console.log("======= in render in PlayerList ======", this.state.players)
    

  }

  render() {
    
    return (
      <div>
        {this.state.players.length < 1 
          ? 
          <h1>There are currently no players in the database. Add some players!</h1>
          :
          <>
          <h1>There are currently <span className="player-count-value">{this.state.players.length}</span> players</h1>
            <ul>
              <ContentContainer playerData={this.state.players} playerLinks={this.state.playerLinks} />
            </ul>
          </>
        }
      </div>
    )
  }
}

export default PlayerList
 