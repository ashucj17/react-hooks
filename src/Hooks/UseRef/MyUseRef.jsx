import React, { useEffect, useRef, useState } from 'react'

const MyUseRef = () => {
    const [name,setName] = useState("")
    const count = useRef(0);
    const inputElement = useRef('');
console.log(count.current)
    // const [count,setCount]  = useState(0)
    useEffect(()=>{
        count.current= count.current + 1;
    })
     
    const handleClick= ()=> {
        console.log(inputElement.current);
        inputElement.current.style.borderRadius= "12px"
        inputElement.current.focus()
    }
  return (
    <div>
    <h1 style={
        {color:'white',
        background: '#838339ff',
    }}>MyUseRef</h1>
    <input type="text" ref={inputElement} onChange={(e)=>{setName(e.target.value)}}/>
    <h3>{name}</h3>
    <h4>Renders: {count.current}</h4>
    <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default MyUseRef