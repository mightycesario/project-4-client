import React from 'react'

export default function PlayerCard(props) {
  return (
    <div className="playerCard">
        <h3>{props.title}</h3>
        <div className="image-container">
          <img src={props.photo} alt=""/>
        </div>
    </div>
  )
}
