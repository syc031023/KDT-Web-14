import React from 'react'
import {useRef} from 'react'

export default function RefFunction1() {
    // 1. ref 객체 만들기
    const inputRef = useRef();

    const handleFocus = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <p>(함수형 컴포넌트) 버튼 클릭 시 Input에 focus 처리</p>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>focus</button>
    </div>
  )
}
