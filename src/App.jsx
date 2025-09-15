import { useState } from 'react'
import './App.css'
import ClassComponent from './ReactLifeCycle/ClassComponent'
import FunctionalComponent from './ReactLifeCycle/FunctionalComponent'
import MyUseState from './Hooks/MyUseState'
import MyUseEffect from './Hooks/MyUseEffect'
import MyUseRef from './Hooks/MyUseRef'




function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <ClassComponent/>

      <button onClick={()=>{
        setShow(!show)
      }}>Toggle Component</button>
      {show &&<FunctionalComponent /> }
      <MyUseState /> */}
      <MyUseEffect />
      <hr></hr>
      <MyUseRef />
      
    </>
  )
}

export default App
