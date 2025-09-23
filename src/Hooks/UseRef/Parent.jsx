import React, { useContext, useRef, useState } from 'react'
import CustomInput from './CustomInput'
import { UserContext, useUserDetails } from '../../Context/UserContext'


const Parent = () => {
    const inputEle = useRef('')
    // const [name, setName] = useState()
    // const {user, setUser} = useContext(UserContext)

    const {name, setName, user, setUser} =  useUserDetails();
  return (
    <div>
    <h3>Hello: {name} </h3>
    <h2>Good Morning Mr. {user}</h2>
        <CustomInput ref={inputEle} changeName={(e)=>{
            setName(e.target.value)
        }} />

        <CustomInput ref={inputEle} changeName={(e)=>
        setUser(e.target.value)}/>
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
        <hr/>
    </div>
  )
}

export default Parent