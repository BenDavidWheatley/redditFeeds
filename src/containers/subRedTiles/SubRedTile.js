import React from 'react';
import Style from './subRedTile.module.css';
import { useDispatch} from 'react-redux';
import { getSubredditAsync } from '../search/searchSlice';
import { removeSubreddit } from '../subReddits/subRedSlice'; 

function SubRedTile(props) {
    const dispatch = useDispatch();
    
    return (
        <section className={Style.mySubContainer}>
            <div 
                className={Style.subRedAnchor}
                onClick={() => {
                    dispatch(getSubredditAsync(props.title));
                    props.toggleOpen(); 
                }}
            >
                <div data-testid='subRedTile' className={Style.subRedTile}>
                    <p className={Style.title}>{props.title}</p>
                    <p 
                        className={Style.removeButton}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            dispatch(removeSubreddit(props.title));
                        }}
                    >
                        remove
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SubRedTile;
