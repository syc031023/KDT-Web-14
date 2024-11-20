import React from 'react';
import { useState } from 'react';

export default function Practice() {

    const img = [
        'https://img.hankyung.com/photo/202403/AA.36104679.1.jpg',
        'https://i.namu.wiki/i/dqWKCUVwNsWjXOC4w93zgD8lmNaWesoOIlbnt8wAiymHoXYivK9HSOhY5dCVym_-gElG9OsPqJuLHxxgHNc4Ew.webp',
        'https://pimg.mk.co.kr/meet/neds/2018/07/image_readtop_2018_437247_15312913213383859.jpeg'
    ];

    const [selection, setSelection] = useState({
        fruit: img[0],
        backgroundColor: "black",
        color: "white",
        text: ""
    });

    const changeColor = (e) => {
        console.log(e.target.id);

        let id = e.target.id;

        if(id === 'fruit') {
            setSelection({
                fruit: img[e.target.value],
                backgroundColor: selection.backgroundColor,
                color: selection.color,
                text: selection.text,
            });
        } else if(id === "backgroundColor"){
            setSelection({
                fruit: selection.fruit,
                backgroundColor: e.target.value,
                color: selection.color,
                text: selection.text,
            });
        } else if(id === "color"){
            setSelection({
                fruit: selection.fruit,
                backgroundColor: selection.backgroundColor,
                color: e.target.value,
                text: selection.text,
            });
        } else {
            setSelection({
                fruit: selection.fruit,
                backgroundColor: selection.backgroundColor,
                color: selection.color,
                text: e.target.value,
            });
        }

    };


    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div>
                과일:
                <select name="fruit" id="fruit" onChange={(e) => {changeColor(e)}}>
                    <option value="0" selected>사과</option>
                    <option value="1">오렌지</option>
                    <option value="2">바나나</option>
                </select>
                배경색:
                <select name="backgroundColor" id="backgroundColor" onChange={(e) => {changeColor(e)}}>
                    <option value="white">흰색</option>
                    <option value="black" selected>검정색</option>
                    <option value="red">빨간색</option>
                    <option value="blue">파란색</option>
                </select>
                글자색:
                <select name="color" id="color" onChange={(e) => {changeColor(e)}}>
                    <option value="white" selected>흰색</option>
                    <option value="black">검정색</option>
                    <option value="red">빨간색</option>
                    <option value="blue">파란색</option>
                </select>
            <br /><br />
            내용:
            <input type="text" id='text' placeholder='내용을 입력하세요.' onChange={(e) => {changeColor(e)}} />
            </div>

            <img src={selection.fruit} style={{width: "200px", height: "200px"}} />
            <div style={{
                width: "150px",
                height: "100px",
                backgroundColor: selection.backgroundColor,
                color: selection.color
            }}>{selection.text}</div>

        </div>
    )
}
