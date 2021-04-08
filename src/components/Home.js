import React from 'react'
import { render } from '@testing-library/react'
import {Link} from 'react-router-dom'

const Home = () => {
    
  console.log("homepage")

  return (
    <div>
      you're at the homepage
    </div>
  )
}

export default Home