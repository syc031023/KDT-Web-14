import React from 'react'

export default function Box({children}) {
  return (
    <div style={{border: "1px solid black", width: "300px", height: "200px"}}>
        {children}
    </div>
  )
}
