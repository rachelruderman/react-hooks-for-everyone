import React, {useRef} from 'react';
import {useTitleInput} from "./hooks/index";

const App = () => {
    const [name, setName] = useTitleInput('');
    const ref = useRef();

    return (
        <div className="main-wrapper" ref={ref}>
            <h1 onClick={() => ref.current.classList.add('new-fake-class')}>Level Up Dishes</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
        </div>
    );
};

export default App;