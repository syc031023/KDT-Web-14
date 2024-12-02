import React from 'react'
import {useReducer} from 'react';

const iniState = { value: 0 };

const reducer = (prevState, action) => {
    console.log(prevState, action);

    switch (action.type) {
        case 'INCREMENT':
            return { value: prevState.value + 1};
        case 'DECREMENT':
            return { value: prevState.value - 1};
        case "RESET": 
            return iniState;
        default:
            return {value : prevState.value};
    }
}

export default function UseReducerEx() {
    // reducer: state를 업데이트하는 함수
    // dispatch: 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
    // state: 현재 상태
    // useReducer는 [state, dispatch]를 리턴함
    const [state, dispatch] = useReducer(reducer, iniState);
    return (
        <div>
            <h1>UseReducerEx</h1>
            <h2>{state.value}</h2>

            <button onClick={() => dispatch({type :"INCREMENT"})}>Plus</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Minus</button>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    )
}
