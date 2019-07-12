import React, {useRef, createContext} from 'react';
import {useTitleInput} from "../hooks/index";
import Toggle from './Toggle';
import Counter from './Counter';
import useAbortableFetch from 'use-abortable-fetch';

export const UserContext = createContext();

const App = () => {
    const ref                   = useRef();
    const [name, setName]       = useTitleInput('');
    const { data }              = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')

    if (!data) {
        return null;
    }

    const onClick               = () => ref.current.classList.add('new-fake-class');
    const title                 = 'Level Up Dishes';

    const renderTitle           = () => <h1 onClick={onClick}>{title}</h1>;
    const renderToggle          = () => <Toggle/>;
    const renderCounter         = () => <Counter/>;

    const renderForm = () => (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </form>
    );

    const renderDishes = () => data.map(dish => {
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