import React, { useEffect, useLayoutEffect, useState } from 'react'

const MyUseEffect = () => {
    const [width, setWidth]= useState(300)

    console.log("Renderinng...", width)

    useLayoutEffect(()=>{
        console.log("UseEffect", width)
        setWidth(600)
    },[])
  return (
    <div style={
        {width: `${width}px`,
        color: 'white',
        background: '#808000',
        transition: 'width 1s',
        }
    }>MyUseEffect</div>
  )
}

export default MyUseEffect