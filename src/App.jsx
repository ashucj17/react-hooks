import { useState } from 'react'
import './App.css'
import ClassComponent from './ReactLifeCycle/ClassComponent'
import FunctionalComponent from './ReactLifeCycle/FunctionalComponent'


function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <ClassComponent/> */}

      <button onClick={()=>{
        setShow(!show)
      }}>Toggle Component</button>
      {show &&<FunctionalComponent /> }
      
    </>
  )
}

export default App
