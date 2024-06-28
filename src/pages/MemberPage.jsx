import React, { Component } from 'react'
import { team } from '../data/team'

export class MemberPage extends Component {
  render() {
    const memberId = window.location.pathname.split( '/' )[ 2 ]
    const member = team.find( item => item.id === memberId )

    if ( !member ) {
      return <div className='container'>
        <div className="alert alert-warning">No member</div>
      </div>
    }

    return (
      <div className='container'>
        <h1>{member.fullName}</h1>
        <p>{member.description}</p>
      </div>
    )
  }
}

export default MemberPage