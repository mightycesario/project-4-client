import React, { Component } from 'react'

const url = "http://localhost:4000/api/v1"


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


}

export default PlayerModel
