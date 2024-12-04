import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./store/bankReducer";

export default function Bank() {
    const [input, setInput] = useState();
    const money = useSelector((state) => state.bank);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>코딩온 은행</h1>
            <h2>잔액: {money}원</h2>

            <input 
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={() => dispatch(deposit(Number(input)))}>입금</button>
            <button onClick={() => dispatch(withdraw(Number(input)))}>출금</button>
        </div>
    )
}