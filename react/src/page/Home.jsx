import React from 'react'
import About from './About'
const Home = ({items,users}) => {
  return (
    <>
    <div>
     <About items={items} users={users}/>
    </div>
    </>
  )
}

export default Home
