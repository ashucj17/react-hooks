import React, { useReducer } from 'react'

const initialState = {count: 0}

const reducer = (state, actions) =>{
        switch(actions.type){
            case 'increment': 
            return {count: state.count + 1 };

            case 'decrement': 
            return {count: state.count - 1 };

            case 'reset':
            return {count: 0};

            default: return state;
        }
}


const Counter = () => {

    const [state, dispatch]  = useReducer(reducer, initialState)
  return (
    <div>
        <h3>Counter: {state.count}</h3>
        <button onClick={()=>{
            dispatch({type: 'increment'})
        }}>+</button>
        <button onClick={()=>{
            dispatch({type: 'decrement'})
        }}>-</button>
        <button onClick={()=>{
            dispatch({type: 'reset'})
        }}>Reset</button>
    </div>
  )
}

export default Counter