import React, { Component } from 'react'



// child of Search component
export class Searchbar extends Component {
  
  state = {
    playerName: ""
  }

  onInputChange = (e) => {
    this.setState({
      playerName: e.target.value
    })
  }
  
  clickHandlers = () => {
    
  }


  render() {
    return (
      <div>
        <input type="text" placeholder="enter a players name" onChange={this.nameChangeHandler}/><button onClick={this.clickHandlers}>Find</button>
      </div>
    )
  }
}

export default Searchbar
