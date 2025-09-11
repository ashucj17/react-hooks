import React, { useState } from 'react'

const MyUseState = () => {
    const [name, setName] = useState('Ashish')

    const great = () =>{
        setName(name)
    }

  return (
    <>
        <h1>Hello Good Day {name} </h1>
        <button onClick={great}>Great</button>
    </>
  )
}

export default MyUseState