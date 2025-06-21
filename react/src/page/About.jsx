import React from 'react'

const About = ({items,users}) => {
  return (
    <div>
      <h1>About</h1>
       <ol>{items.map((fruits)=>(<li>{fruits}</li>))}</ol>
      <h4>{users.name}</h4>
      <h4>{users.pass}</h4>
    </div>
  )
}

export default About
