// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

// // import for our API request functions
// import PlayerModel from '../models/player'
// import PlayerCard from '../components/PlayerCard'

// export class PlayerList extends Component {

//   state = {
//     players: []
//   }

//   componentDidMount() {
//     console.log("Playerlist mounted")
//     console.log("in didMount hook:", this.state.players)
//     this.fetchData()
//   }

//   fetchData = () => {
//     PlayerModel.all()
//       .then(data => {
//         console.log("fetchData call AFTER hook", data) 
//         this.setState({ players: data.player})
//       }) 
//   }

//   render() {
    
//     console.log("=======in render======", this.state.players)
//     let playerList = this.state.players !== undefined ? 
//     this.state.players.map((player, index) => {
//       return <li key={index}>{player.name}</li>,
//        <li key={index}>{player.team}</li>
//     }) : <></>
    
//     return (
//       <div>
//         <ul>
//           {this.state.players ? playerList : "Loading..."}
//         </ul>
//       </div>
//     )
//   }
// }

// export default PlayerList
 