import {useState, useEffect} from 'react';

export const useTitleInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value
    });

    return [value, setValue];
};