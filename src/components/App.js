import React, {useRef, createContext, useMemo} from 'react';
import {useTitleInput} from "../hooks/index";
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext();

const App = () => {
    const [name, setName] = useTitleInput('');
    const ref           = useRef();
    const onClick       = () => ref.current.classList.add('new-fake-class');

    const reverseWord   = (word) => word.split('').reverse().join('');
    const title         = 'Level Up Dishes';
    const titleReversed = useMemo(() => reverseWord(title), [title]);

    return (
        <UserContext.Provider value={{user: true}}>
            <div className="main-wrapper" ref={ref}>
                <h1 onClick={onClick}>{titleReversed}</h1>
                <Toggle/>
                <Counter/>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </form>
            </div>
        </UserContext.Provider>
    );
};

export default App;