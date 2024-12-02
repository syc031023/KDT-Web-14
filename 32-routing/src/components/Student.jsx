import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Student({ names }) {
    console.log("useParams", useParams());
    const { name } = useParams(); // '1'
    console.log(name);

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("name");

    const navigate = useNavigate();
    return (
        <>
            <div>학생 이름은 <span style={{color: "green"}}>{name}</span>입니다.</div>
            {search !== null && <div>진짜 이름은 <span style={{color: "red"}}>{search}</span>입니다.</div>}
            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </>
    )
}
