import React from 'react';
import Style from './subRedTile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSubredditAsync } from '../search/searchSlice';
import { removeSubreddit } from '../subReddits/subRedSlice'; // Adjust the import path to match your file structure

function SubRedTile(props) {
    const dispatch = useDispatch();

    return (
        <section className={Style.mySubContainer}>     
            <a 
                className={Style.subRedAnchor} 
                onClick={() => dispatch(getSubredditAsync(props.title))}
            >
                <div data-testid='subRedTile' className={Style.subRedTile}>
                    <img src={props.img} alt={props.title} />
                    <p>{props.title}</p>
                    <p 
                        className={Style.removeButton}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the parent onClick
                            dispatch(removeSubreddit(props.title));
                        }}
                    >
                        remove
                    </p>
                </div>
            </a>
        </section>
    );
}

export default SubRedTile;


