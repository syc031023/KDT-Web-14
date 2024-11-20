import React from 'react';
import {useState} from "react";

export default function Practice2() {
    const [number, setNumber] = useState(0);

    const increase = () => {
        setNumber(number + 2);
    }
    const decrease = () => {
        setNumber(number - 1);
    }
  return (
    <div>
        <h2>{number}</h2>
        <button onClick={increase}>+2</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}
