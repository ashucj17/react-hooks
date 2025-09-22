import { useState } from 'react'
import './App.css'
import ClassComponent from './ReactLifeCycle/ClassComponent'
import FunctionalComponent from './ReactLifeCycle/FunctionalComponent'
import MyUseState from './Hooks/UseState/MyUseState'
import MyUseEffect from './Hooks/UseEffect/MyUseEffect'
import MyUseRef from './Hooks/UseRef/MyUseRef'
import Parent from './Hooks/UseRef/Parent'
import { UserContext, UserContextProvider } from './Context/UserContext'





function App() {
  const [show, setShow] = useState(true)
  const [user, setUser] = useState('Ashish')
  const [name, setName] = useState('')

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
      <UserContextProvider userDetails={{name , setName,user, setUser}}>
      <Parent />
      </UserContextProvider>
    </>
  )
}

export default App
