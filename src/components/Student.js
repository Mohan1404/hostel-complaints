import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (
    <div>
        <h1><Link to='/login/student/form'>Raise a complaint</Link></h1>
        <h1><Link to='/login/student/profile'>Profile</Link></h1>
        <h1><Link to='/login'>Logout</Link></h1>
    </div>
  )
}

export default Student