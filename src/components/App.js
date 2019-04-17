import React, {useRef, useState, createContext, useMemo, useEffect} from 'react';
import {useTitleInput} from "../hooks/index";
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext();

const App = () => {
    const [name, setName]       = useTitleInput('');
    const [dishes, setDishes]   = useState([]);

    const fetchDishes = async () => {
        const res   = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
        const data  = await res.json();
        setDishes(data);
    };

    // every time this is mounted or rendered, it will fetch dishes again -- unless you specify second parameter
    // can put pieces of state in the array. Recommended to forget lifecycle methods and use react hooks instead
    useEffect(fetchDishes, []);

    const ref                   = useRef();
    const onClick               = () => ref.current.classList.add('new-fake-class');
    const reverseWord           = (word) => word.split('').reverse().join('');
    const title                 = 'Level Up Dishes';
    const titleReversed         = useMemo(() => reverseWord(title), [title]);

    const renderTitle           = () => <h1 onClick={onClick}>{titleReversed}</h1>;
    const renderToggle          = () => <Toggle/>;
    const renderCounter         = () => <Counter/>;

    const renderForm = () => (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    );

    const renderDishes = () => dishes.map(dish => {
        const {name, desc, ingredients} = dish;
        return (
            <article className='dish-card dish-card--withImage' key={name}>
                <h3>{name}</h3>
                <p>{desc}</p>
                <div className='ingredients'>
                    {ingredients.map( (ingredient, i) => <span key={i}>{ingredient}</span>)}
                </div>
            </article>
        )});

    return (
        <UserContext.Provider value={{user: true}}>
            <div className="main-wrapper" ref={ref}>
                {renderTitle()}
                {renderToggle()}
                {renderCounter()}
                {renderForm()}
                {renderDishes()}
            </div>
        </UserContext.Provider>
    );
};

export default App;