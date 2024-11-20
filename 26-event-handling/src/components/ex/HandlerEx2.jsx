import React from 'react';
import {useState} from 'react';

export default function HandlerEx2() {
    const [message, setMessage] = useState("검정색 글씨");
    const [styleText, setStyleText] = useState({color: 'black'});

    const [textColor, changeColor] = useState({color: "black", text: "검정색"})

    const changeRed = () => {
        setMessage("빨간색 글씨");
        setStyleText({color: 'red'})
    }
    const changeBlue = () => {
        setMessage("파란색 글씨");
        setStyleText({color: 'blue'})
    }
  return (
    <div>
        <h1>실습 2</h1>
        <h2 style={styleText}>{message}</h2>
        <button onClick={changeRed}>빨간색</button>
        <button onClick={changeBlue}>파란색</button>

        <h1>다른 방법</h1>
        <h2 style={{color: textColor.color}}>{textColor.text} 글씨</h2>
        <button onClick={() => {
            changeColor({color: "red", text: "빨간색"});
        }}>빨간색</button>
        <button onClick={() => {
            changeColor({color: "blue", text: "파란색"});
        }}>파란색</button>
    </div>


  )
}
