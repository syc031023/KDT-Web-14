import React from 'react';
import {useState} from 'react';

export default function HandlerEx3() {
    const [buttonText, setButtonText] = useState("사라져라");
    const [styleText, setStyleText] = useState({display: "block"});

    const showText = () => {
        if(buttonText === "사라져라"){
            setButtonText("보여라");
            setStyleText({display: "none"});
        } else {
            setButtonText("사라져라");
            setStyleText({display: "block"});
        }
    }
    return (
    <div>
        <h1>실습 3</h1>
        <button onClick={showText}>{buttonText}</button>
        <h2 style={styleText}>안녕하세요</h2>
    </div>
  )
}
