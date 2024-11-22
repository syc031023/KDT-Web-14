import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function RefFunction2() {
    const idRef = useRef(1);
    const [id, setId] = useState(10);
    let test = 10;

    const plusIdRef = () => {
        idRef.current += 1;
        console.log(idRef.current);
        test += 1;
        console.log(test);
    };

    const plusIdState = () => {
        setId(id+1);
    };
  return (
    <div>
        <h2>Ref Sample</h2>
        <h2>{test}</h2>
        <h2>{idRef.current}</h2>
        <button onClick={plusIdRef}>Plus Ref</button>
        <h2>{id}</h2>
        <button onClick={plusIdState}>Plus State</button>
    </div>
  )
}
