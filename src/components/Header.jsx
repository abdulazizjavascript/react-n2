import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { pages } from '../constants/pages'

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <ul className="nav justify-content-center">
            {pages.filter( page => page.name ).map( ( { url, name } ) => <li className="nav-item">
              <NavLink className="nav-link" to={'/' + url}>{name}</NavLink>
            </li> )}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/">HomePage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/team'>Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/auth/login'>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/auth/register'>Register</NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header