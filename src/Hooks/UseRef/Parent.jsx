import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput'


const Parent = () => {
    const inputEle = useRef('')
    const [name, setName] = useState()
  return (
    <div>
    <h3>Hello: {name} </h3>
        <CustomInput ref={inputEle} changeName={(e)=>{
            setName(e.target.value)
        }} />
       {/*  <button onClick={()=>{
            inputEle.current.focus()
        }}>Focus</button>
        <button onClick={()=>{
            inputEle.current.value=""
        }}>Clear</button> */}
        <button onClick={()=>{
            inputEle.current.focusInput()
        }}>Focus</button>
        <button onClick={()=>{
            inputEle.current.clearInput()
        }}>Clear</button>
    </div>
  )
}

export default Parent