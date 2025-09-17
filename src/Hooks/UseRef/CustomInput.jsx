import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const CustomInput = forwardRef((props, ref) => {
    console.log("Ashish", props, ref);

    const inputElement  = useRef();

    useImperativeHandle(ref, ()=>({
        focusInput:()=>{
                inputElement.current.focus();
        },
        clearInput:() =>{
            inputElement.current.value=""
        }
    }))
  return (
    <div><input ref={inputElement} onChange={props.changeName}/></div>
  )
})

export default CustomInput