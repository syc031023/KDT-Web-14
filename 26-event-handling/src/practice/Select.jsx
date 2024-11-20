import React from 'react'
import Input from './Input';

export default function Select(props) {
    const setData = props.setData;
    const img = props.img;
    return (
        <div>
            과일:
            <select name="fruit" id="fruit" onChange={(e) => {
                setData((data) =>  {return {...data, fruit: img[e.target.value]}})
            }}>
                <option value="0" selected>사과</option>
                <option value="1">오렌지</option>
                <option value="2">바나나</option>
            </select>
            배경색:
            <select name="backgroundColor" id="backgroundColor" onChange={(e) => {
                setData((data) =>  {return {...data, background: e.target.value}})
            }}>
                <option value="white">흰색</option>
                <option value="black" selected>검정색</option>
                <option value="red">빨간색</option>
                <option value="blue">파란색</option>
            </select>
            글자색:
            <select name="color" id="color" onChange={(e) => {
                setData((data) =>  {return {...data, color: e.target.value}})
            }}>
                <option value="white" selected>흰색</option>
                <option value="black">검정색</option>
                <option value="red">빨간색</option>
                <option value="blue">파란색</option>
            </select>
            <br />
            <Input setData={setData}></Input>
        </div>
    )
}
