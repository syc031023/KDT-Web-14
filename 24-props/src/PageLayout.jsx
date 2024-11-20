import React from 'react'

export default function PageLayout({children}) {
  return (
    <div>
        <header style={{backgroundColor: "#eee", padding: "16px"}}><h1>헤더</h1></header>
        <main style={{padding: "16px"}}>{children}</main>
        <footer style={{backgroundColor: "#eee", padding: "16px", marginTop: "16px"}}><p>footer</p></footer>
    </div>
  )
}
