import React from 'react'
import About from './About'
import image from '../assets/background.jpeg'
const Home = ({items,users}) => {
  return (
    <>
    <div>
     <About items={items} users={users}/>
     <img src={image} alt="react"></img>
    </div>
    </>
  )
}

export default Home
