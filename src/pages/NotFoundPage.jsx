import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Link className='text-center' to="/">Home</Link>
      </div>
    )
  }
}

export default NotFoundPage