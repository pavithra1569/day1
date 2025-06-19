import React from 'react'

const Home = ({items,users}) => {
  return (
    <>
    <div>
      <ol>
        {items.map((fruits)=>(<li>{fruits}</li>))}
      </ol>
      <h4>
        {users.name}
      </h4>
      <h4>
        {users.pass}
      </h4>
    </div>
    </>
  )
}

export default Home
