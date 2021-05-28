import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <h4>Navigation Bar</h4>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">Recipes</NavLink>
          <NavLink to="/createNew">Create your OWN !</NavLink>
          {/* <NavLink to="/listings">Listings</NavLink>
          <NavLink to="/new">New Boat</NavLink> */}
        </div>
      </nav>
    )
  }
}
