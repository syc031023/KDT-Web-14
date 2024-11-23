import React, {useEffect} from 'react'


export default function LifeCycleFuncChild({number}) {

    useEffect(() => {
        console.log("컴포넌트 마운트!!")
    }, [])
    useEffect(() => {
        return () => {
            console.log("컴포넌트 언마운트!!")
        }
    }, []);

    //  mount + update 시점
    useEffect(() => {
        console.log("컴포넌트 업데이트!!")
    }, [number])
  return (
    <div>현재 number 값은 {number}</div>
  )
}
