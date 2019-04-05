import React from 'react';
import {useTitleInput} from "./hooks/index";

const App = () => {
    const [name, setName] = useTitleInput('');

    return (
        <div className="main-wrapper">
            <h1>Level Up Dishes</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
        </div>
    );
};

export default App;