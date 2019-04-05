import React, {useState} from 'react';

const App = () => {

    const [name, setName] = useState('');

    return (
        <div className="main-wrapper">
          <h1>Level Up Dishes</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    );
};

export default App;