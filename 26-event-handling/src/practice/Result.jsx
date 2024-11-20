import React from 'react'

export default function Result({data}) {
    const {fruit, background, color, content} = data;
  return (
    <div>
        <img src={fruit} style={{width: "200px", height: "200px"}} />
        <div style={{
                width: "200px",
                height: "100px",
                backgroundColor: background,
                color: color
            }}>{content}</div>
    </div>
  )
}
