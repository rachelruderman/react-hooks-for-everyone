import React, {useRef, createContext} from 'react';
import {useTitleInput} from "../hooks/index";
import Toggle from './Toggle';

export const UserContext = createContext();

const App = () => {
    const [name, setName] = useTitleInput('');
    const ref       = useRef();
    const onClick   = () => ref.current.classList.add('new-fake-class');

    return (
        <UserContext.Provider value={{user: true}}>
            <div className="main-wrapper" ref={ref}>
                <h1 onClick={onClick}>Level Up Dishes</h1>
                <Toggle/>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </form>
            </div>
        </UserContext.Provider>
    );
};

export default App;