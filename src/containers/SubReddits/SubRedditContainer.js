import React from 'react';
import SubRedditTile from '../subRedTiles/SubRedTile';
import Style from './subReddits.module.css';
import { addSubreddit } from './subRedSlice';
import { useSelector, useDispatch } from "react-redux";

function SubRedditContainer(props) {
    const dispatch = useDispatch();
    const subs = useSelector((state) => state.mySubReddits.subs);

    const handleAddSubreddit = () => {
        const inputElement = document.getElementById('subInput');
        const value = inputElement.value.trim();
        if (value) {

            dispatch(addSubreddit(value));
            inputElement.value = ''; // Clear input after adding
        }
    };

    return (
        <div data-testid="subRedElement" className={Style.subRedContainer}>
            <h2>My Subreddits</h2>
            <input 
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

            {subs.map((sub, index) => (
              
                <div key={index}>
                    <SubRedditTile 
                        className={Style.subRedTile}
                        id={sub.id}
                        title={sub}
                        image={sub}
                    />
                </div>
            ))}
        </div>
    );
}

export default SubRedditContainer;


