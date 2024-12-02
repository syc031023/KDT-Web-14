import {useState} from 'react';

export default function useToggle(initValue = false){
    const [value, setValue] = useState(initValue);

    const setToggle = () => {
        setValue(!value);
    };

    return [value, setToggle];
}