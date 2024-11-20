import React from 'react'

export default function Input(props) {
    const setData = props.setData;
    const handleInput = (e) => {
        setData((data) => {
            return { ...data, content: e.target.value};
        })
    }
  return (
    <>
        내용:
        <input type="text" onChange={handleInput} />
    </>
  )
}
