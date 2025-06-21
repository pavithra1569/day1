import React from 'react'
import {Link} from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Link to='/state'>userState</Link>
      <Link to='/effect'>useEffect</Link>
      <Link to='/effect2'>useEffect2</Link>
      <Link to='/ref'>ref</Link>
      <Link to='/useReducer'>useReducer</Link>
    </div>
  )
}

export default Hooks
