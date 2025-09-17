import React, { forwardRef } from 'react'

const CustomInput = forwardRef((props, ref) => {
    console.log("Ashish", props, ref)
  return (
    <div><input ref={ref} onChange={props.changeName}/></div>
  )
})

export default CustomInput