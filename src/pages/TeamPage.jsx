import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { team } from '../data/team'

export class TeamPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center">TeamPage</h1>
          <div className="row">
            {team.map( item => <div key={item.id} className="col-4">
              <div className="card p-3 mb-3">
                <h3 className="card-title">{item.fullName}</h3>
                <Link to={`/team/${item.id}`}>More</Link>
              </div>
            </div> )}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TeamPage