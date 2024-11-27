import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Student({ names }) {
    console.log("useParams", useParams());
    const { name } = useParams(); // '1'
    console.log(name);
    let [tartgetName] = names.filter((n) => n === name );
    console.log(tartgetName);
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("name");

    const navigate = useNavigate();
    return (
        <>
            <div>학생 이름은 {tartgetName}입니다.</div>
            {search !== null && <div>진짜 이름은 {search}입니다.</div>}
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </>
    )
}
