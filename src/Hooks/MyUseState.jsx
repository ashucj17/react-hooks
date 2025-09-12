import React, { useState } from 'react'

const MyUseState = () => {
    const [name, setName] = useState('Ashish');
    const [flag, setFlag] = useState(false)
    const [count, setCount] = useState(0)
    const [names, setNames] = useState([])

    const great = () =>{
        return setFlag(!flag)
    }

    const increment = () =>{
        console.log(count)
        // setCount(count + 1)
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    const decrement = () =>{
        setCount(count  - 1 )

    }

    const addNames = (e) =>{
        e.preventDefault()
        // setNames(names.push({id:name.length, name}))
        setNames([...names,{id: names.length, name}])
        console.log(names)

    }

  return (
    <>
        <h1>Hello Good Day {flag ? name : ""} </h1>
        <button onClick={great}>Great</button>
        <hr/>
        <div>
        <button onClick={increment}>Increment</button>
        <div><h2>{count}</h2></div>
        <button onClick={decrement}>Decrement</button>
        <hr/>
        </div>
        <div>
            <form onSubmit={addNames}>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <button>Submit</button>

                <ul>
                {names.map(item => (
                    <li key={item.id}>{item.name}</li>

                ) )
                }
                </ul>
            </form>
        </div>
    </>
  )
}

export default MyUseState;