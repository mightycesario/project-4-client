import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1><Link to="/" className="logo">the side<span style={{color:"#46b7b7"}}>line</span><span class="material-icons">
sports_rugby</span></Link></h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/about">about</Link></li>
              {/* <li><Link to="/contenttwo">contenttwo</Link></li> */}
              <li><Link to="/players">players</Link></li>
              {/* <li><Link to="/search" onClick={this.handleSearch}><button className="btn">Search</button></Link></li> */}
              <li><Link to="/players/new" onClick={this.handleSearch}><button className="btn">Add</button></Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
