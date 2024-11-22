import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Practice2() {

    const [info, setInfo] = useState([])
    const [input, setInput] = useState({ id: 0, name: '', title: '' });
    const [searchInfo, setSearch] = useState({ type: 'name', content: '' });
    const [searchArr, setSearchArr] = useState([]);

    const nameRef = useRef();
    const titleRef = useRef();

    const addContent = () => {
        if (input.name.trim().length === 0) {
            nameRef.current.focus();
            return;
        } else if (input.title.trim().length === 0) {
            titleRef.current.focus();
            return;
        }

        const id = input.id + 1;
        setInput({ ...input, id: id });
        const newInfo = { id: id, name: input.name, title: input.title };
        setInfo(info.concat(newInfo));
    }

    const deleteInfo = (targetId) => {
        const newInfo = info.filter((value) => value.id !== targetId);

        setInfo(newInfo);
    }

    const search = () => {
        console.log(searchInfo)

        let newSearchInfo = [];

        if (searchInfo.content.length === 0) {
            setSearchArr([]);
            return;
        }
        if (searchInfo.type === 'name') {
            newSearchInfo = info.filter((value) => value.name.includes(searchInfo.content));
        } else {
            newSearchInfo = info.filter((value) => value.title.includes(searchInfo.content));
        }

        console.log(newSearchInfo);

        setSearchArr(newSearchInfo);
    }
    return (
        <div className="contents" style={{ width: "600px" }}>
            <form style={{ border: "1px solid black", padding: "10px" }}>
                작성자: <input type="text" placeholder='작성자' value={input.name} style={{ margin: "5px" }} ref={nameRef}
                    onChange={(e) => { setInput({ ...input, name: e.target.value }) }}
                />
                제목: <input type="text" placeholder='제목' value={input.title} style={{ margin: "5px" }}
                    ref={titleRef}
                    onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            addContent();
                        }
                    }}
                />
                <button type='button' onClick={addContent}>작성</button>
            </form>
            <div style={{ padding: "10px" }}>
                <select name="name" id="name" style={{ margin: "10px" }} value={searchInfo.type}
                    onChange={(e) => { setSearch({ ...searchInfo, type: e.target.value }) }}
                >
                    <option value="name">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input type="text" placeholder='검색어'
                    style={{ margin: "10px", width: "200px" }}
                    value={searchInfo.content}
                    onChange={(e) => { setSearch({ ...searchInfo, content: e.target.value }) }}
                />
                <button onClick={search}>검색</button>
                <button onClick={() => setSearchArr(info)}>전체</button>
            </div>

            <table border={1} style={{ width: "80%", margin: "20px" }}>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>제목</td>
                        <td>작성자</td>
                    </tr>
                </thead>
                <tbody>
                    {info.map((info) => {
                        return <tr key={info.id} onDoubleClick={() => deleteInfo(info.id)}>
                            <td>{info.id}</td>
                            <td>{info.title}</td>
                            <td>{info.name}</td>
                        </tr>
                    })}
                </tbody>
            </table>

            {searchArr.length === 0 ? <h4>검색 결과가 없습니다.</h4> :

                <table style={{ width: "80%", margin: "20px" }}>
                    <thead>
                        <tr>
                            <td>번호</td>
                            <td>제목</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody>
                        {searchArr.map((info) => {
                            return <tr key={info.id} onDoubleClick={() => deleteInfo(info.id)}>
                                <td>{info.id}</td>
                                <td>{info.title}</td>
                                <td>{info.name}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}
