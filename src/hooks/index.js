import {useState, useEffect, useDebugValue} from 'react';

export const useTitleInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        document.title = value
    });

    // makes value of hook appears in React dev tools
    useDebugValue(value);

    return [value, setValue];
};