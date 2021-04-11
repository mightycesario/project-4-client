import React from 'react'
import { render } from '@testing-library/react'
import {Link} from 'react-router-dom'
import homeBg from '../home_bg_4.png'

const Home = () => {
    
  console.log("homepage")

  return (
    <div>
      <img width="400" height="600" src={homeBg} />
    </div>
  )
}

export default Home