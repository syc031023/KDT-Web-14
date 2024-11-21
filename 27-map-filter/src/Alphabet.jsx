import React from 'react'
import { useState } from 'react';

export default function Alphabet() {
    const list = ['a', 'b', 'c', 'd', 'e'];
    // const items = list.map((txt, index, arr) => {
    //     console.log("txt: ", txt);
    //     console.log("index: ", index);
    //     console.log("arr: ", arr);

    //     return txt + index;
    // });

    // console.log(items);


    // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
    const [alphabet, setAlphabet] = useState([
        {id: 1, alpha: 'b'},
        {id: 2, alpha: 'a'},
        {id: 3, alpha: 'n'},
        {id: 4, alpha: 'a'},
        {id: 5, alpha: 'n'},
        {id: 6, alpha: 'a'}    
    ]);
    const [input, setInput] = useState("");

    const addAlpha = () => {
        // [퀴즈] input이 빈 값이라면 alphabet 상태 변경 x
        if(input.trim().length === 0) return;
        const id = alphabet.length + 1;
        const newAlpha = alphabet.concat({id: id, alpha: input});
        // alphabet 추가
        setAlphabet(newAlpha);
        console.log(newAlpha)
    };

    const deleteAlpha = (targetId) => {
        const newAlpha = alphabet.filter((value) => value.id !== targetId);

        setAlphabet(newAlpha);
    }
    return (
        <div>
            <input type="text" placeholder='알파벳 입력' value={input} 
                onChange={(e) => {
                    setInput(e.target.value);
            }} />
            <button type='button' onClick={addAlpha}>ADD</button>
            <ol>
                {/* {list.map((txt, index) => {
                    return <li key={index}>{txt}</li>
                })} */}

                {/* {alphabet.map((value) => {
                    return <li>{value}</li>
                })} */}

                {alphabet.map((value) => (<li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
                    {value.alpha}
                </li>))}
            </ol>

            {/* 단축평가 */}
            {alphabet.length === 0 && <span>알파벳을 입력해주세요</span>}
            {undefined || <span>"정의된 값이 없어요"</span>}

        </div>
    )
}
