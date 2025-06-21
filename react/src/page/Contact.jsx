import React,{useContext} from 'react'
import {Context } from '../Hook/Context'
const Contact = () => {
  const user = useContext(Context)
  return (
    <>
    <div>{user.name}</div>
    <div>{user.phno}</div>
    </>
  )
}

export default Contact
