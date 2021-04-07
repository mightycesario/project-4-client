import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1><Link to="/" className="logo">sideline</Link></h1>
          <nav>
            <ul>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/contenttwo">contenttwo</Link></li>
              <li><Link to="/players">players</Link></li>
              <li><Link to="/login" onClick={this.handleLogin}><button className="btn">login</button></Link></li>
              <li><Link to="/signup"><button className="btn">sign up</button></Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
