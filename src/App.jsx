import { useState } from 'react'
import './App.css'
import ClassComponent from './ReactLifeCycle/ClassComponent'
import FunctionalComponent from './ReactLifeCycle/FunctionalComponent'
import MyUseState from './Hooks/MyUseState'



function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <ClassComponent/> */}

      <button onClick={()=>{
        setShow(!show)
      }}>Toggle Component</button>
      {show &&<FunctionalComponent /> }
      <MyUseState />
      
    </>
  )
}

export default App
