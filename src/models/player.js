import React, { Component } from 'react'

const url = process.env.REACT_APP_API || "http://localhost:4000/api/v1"
// const url = process.env.REACT_APP_API || "https://react-sideline-api.herokuapp.com/api/v1"


class PlayerModel {
  // the static keyword allows us to invoke the method
  // without an instance of the class
  static all = () => {
    return fetch(`${url}/players`)
      .then(res =>   res.json())
  }

  // accessed as GameModel.create(gameData)
  static create = (playerData) => {
    return fetch(`${url}/players`, {
      // options
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerData)
    }).then(res => res.json())
  }

  static show = (playerId) => {
    return fetch(`${url}/players/${playerId}`)
    .then(res =>   res.json())
  }

  static update = (playerId, playerData) => {
    return fetch(`${url}/players/${playerId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(playerData)
      }
    )
      .then(res => res.json())
  }

  static destroy = (playerId) => {
    return fetch(`${url}/players/${playerId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => res.json())
  }

  // new method to get 1 id , show like the Show page


}

export default PlayerModel
