import React from 'react';
import { useState } from 'react';

export default function Practice() {

    const [info, setInfo] = useState([])
    const [input, setInput] = useState({ name: '', mail: '' });
    const apply = () => {
        if (input.name.trim().length === 0) {
            return;
        }

        const newInfo = { name: input.name, mail: input.mail };
        setInfo(info.concat(newInfo));
    }

    const deleteInfo = (targetName) => {
        const newInfo = info.filter((value) => value.name !== targetName);

        setInfo(newInfo);
    }


    return (
        <div>

            <input type="text" placeholder='이름' value={input.name}
                onChange={(e) => { setInput({ ...input, name: e.target.value }) }}
            />
            <input type="text" placeholder='이메일' value={input.mail}
                onChange={(e) => { setInput({ ...input, mail: e.target.value }) }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        apply();
                    }
                }}
            />
            <button onClick={apply}>등록</button>

            <br />

            {info.map((info) => {
                return <h3 onDoubleClick={() => deleteInfo(info.name)}>{info.name}: {info.mail}</h3>;
            })}
        </div>
    )
}
