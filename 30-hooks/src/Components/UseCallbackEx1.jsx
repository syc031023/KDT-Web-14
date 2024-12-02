import React from 'react'
import {useState} from 'react';
import {useCallback} from 'react';


// useCallback
// - 매번 함수를 생성하지 않고, 함수를 기억해뒀다가 필요할 때 함수를 재사용
export default function UseCallbackEx1() {
    const [text, setText] = useState("");

    // [before]
    // text 상태가 업데이트되면 = 컴포넌트 리렌더링 = 코드를 다시 읽음
    // = onChangeText 함수도 다시 생성 (js func는 object type. 주소 값이 변경)
    // const onChangeText = (e) => {
    //     setText(e.target.value);
    // };

    // [after]
    // useCallback 훅으로 함수를 기억해서 (캐싱)
    // 컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않으면 기존 함수를 재사용
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
  return (
    <div>
        <h1>UseCallbackEx1</h1>
        <input type="text" value={text} onChange={(e) => onChangeText(e)} />
        <div>작성한 값: {text || "없음"}</div>
    </div>
  )
}
