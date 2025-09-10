import React, { useEffect, useState } from 'react'

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect: Mounting")
    },[])

    useEffect(()=>{
        console.log("useEffect: Mounting")
        
        return ()=>{
            console.log("Removed Compunent from DOM")
        }
    },[count])
  return (
    <>
        <h2>Count: {count}</h2>
        <button onClick={()=>{
            setCount(count + 1)
        }}>Count + 1</button>
    </>
  )
}

export default FunctionalComponent