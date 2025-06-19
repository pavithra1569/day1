// import React from 'react'

// const Child = (probs) => {
//   return (
//     <>
//     <div>
//       <h1>Name:{probs.name}</h1>
//     </div>
//     </>
//   )
// }

// export default Child
import React from 'react'

const child = ({name,phno,dept}) => {
  return (
    <div>
      <h1> Name:{name}</h1>
      <h1>phno:{phno}</h1>
      <h1>dept:{dept}</h1>
    </div>
  )
}

export default child
