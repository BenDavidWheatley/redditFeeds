import React, { useState } from 'react';
import SubRedditTile from '../subRedTiles/SubRedTile';
import Style from './subReddits.module.css';
import { addSubreddit } from './subRedSlice';
import { useSelector, useDispatch } from "react-redux";

function SubRedditContainer() {

    const dispatch = useDispatch();
    const subs = useSelector((state) => state.mySubReddits.subs);

    const [isOpen, setIsOpen] = useState(false);

    const handleAddSubreddit = () => {
        const inputElement = document.getElementById('subInput');
        const value = inputElement.value.trim();
        if (value) {
            dispatch(addSubreddit(value));
            inputElement.value = ''; // Clear input after adding
        }
    };

    const toggleOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div data-testid="subRedElement" className={`${Style.subRedContainer} ${isOpen ? Style.open : ''}`} >
            <div className={Style.subRedh2}>
                <h2>My Subreddits</h2>
                <p onClick={toggleOpen}>Open</p>
            </div>
            
            <input 
                placeholder='Save a subReddit'
                id="subInput"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddSubreddit();
                    }
                }}
            />
            <button onClick={handleAddSubreddit}>
                Add
            </button>
            <div  className={Style.tileContainer}>
            {subs.map((sub, index) => (
                <div key={index}>
                    <SubRedditTile
                        className={Style.subRedTile}
                        id={sub.id}
                        title={sub}
                        image={sub}
                        toggleOpen={toggleOpen}
                    />
                </div>
            ))}
            </div>        
        </div>
    );
}

export default SubRedditContainer;
