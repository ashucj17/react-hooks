import { useState } from 'react'
import './App.css'
import ClassComponent from './ReactLifeCycle/ClassComponent'
import FunctionalComponent from './ReactLifeCycle/FunctionalComponent'
import MyUseState from './Hooks/UseState/MyUseState'
import MyUseEffect from './Hooks/UseEffect/MyUseEffect'
import MyUseRef from './Hooks/UseRef/MyUseRef'
import Parent from './Hooks/UseRef/Parent'





function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {/* <ClassComponent/>

      <button onClick={()=>{
        setShow(!show)
      }}>Toggle Component</button>
      {show &&<FunctionalComponent /> }
      <MyUseState /> 
      <MyUseEffect />
      <hr></hr>
      <MyUseRef />*/}
      <Parent />
      
    </>
  )
}

export default App
