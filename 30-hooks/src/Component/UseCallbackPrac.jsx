import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export default function UseCallbackPrac() {
    const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
    const [editText, setEditText] = useState('');
    const [editIdx, setEditIdx] = useState(null);

    const handleEdit = useCallback((item, idx) => {
        setEditText(item);
        setEditIdx(idx);
    }, []);

    const handleSave = useCallback((editText) => {
        setItems(items.map((item, idx) => (idx === editIdx ? editText : item)));
        setEditIdx(null);
    }, [editText, editIdx]);

    const handleDelete = useCallback((targetIdx) => {
        setItems(items.filter((item, idx) => idx !== targetIdx));
    }, [items]);
    return (
        <div>
            <ul>
                {items.map((item, idx) => {
                    return (
                        <li key={idx}>
                            {editIdx === idx ? (
                                <>
                                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                    <button onClick={() => handleSave(editText)}>Save</button>
                                </>
                            ) : (
                                <>
                                    {item}
                                    <button onClick={() => handleEdit(item, idx)}>Edit</button>
                                    <button onClick={() => handleDelete(idx)}>Delete</button>
                                </>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
