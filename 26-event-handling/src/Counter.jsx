import React from 'react'
import {useState} from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 1);
    }

    const alertMsg = (msg) => {
        alert(`${msg}`);
    }

    const consoleMsg = (e, msg) => {
        console.log(e.target);
        console.log(msg);
    }
    return (
    <div>
        <h1>Number counter</h1>
        <h2>{number}</h2>

        {/* 함수에 인자가 없으면 함수 이름만 전달 */}
        <button onClick={increase}>더하기</button>

        {/* 함수에 인자 보내기: 익명함수로 감싸서 처리 */}
        <button onClick={() => {alertMsg("Hallo~")}}>alert 출력</button>
        <button onClick={(e) => {consoleMsg(e, "Hallo~")}}>console 출력</button>
    </div>
  )
}
