import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

// useMemo
// - 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // 임의의 큰 연산을 하는 함수
    // 버튼을 누를 때도, input을 입력할 때도 연산이 이뤄짐
    // useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화
    // [before]
    const calc = () => {
        console.log("계산중...");
        for (let i = 0; i < 100000000; i++) { }
        return count ** 2;
    };

    // [after]
    // count의 값이 바뀔 때만 함수 실행하도록
    const cashedCalc = useMemo(() => {
        console.log("계산중...");
        for (let i = 0; i < 100000000; i++) { }
        return count ** 2;
    }, [count]);

    return (
        <div>
            <h1>UseMemoEx</h1>
            <button onClick={() => setCount(() => count + 1)}>Plus</button>
            <p>count: {count}</p>

            {/* before */}
            {/* <p>calc: {calc()}</p> */}

            {/* after */}
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <p>cashedCalc: {cashedCalc}</p>
        </div>
    );
}
