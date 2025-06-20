
import React,{useEffect,useState} from 'react'
const Effect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
      setTimeout(()=>{
        setCount(count+1)
      },2000)
      //console.log("UseEffect rendered")
    },[count])//dependecy array
    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleReset=()=>{
        setCount(0);
    }

  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onclick={handleReset}>Reset</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Effect
