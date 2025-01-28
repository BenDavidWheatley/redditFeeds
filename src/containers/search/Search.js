import React from 'react';
import Styles from './searchBar.module.css';

import { useDispatch } from 'react-redux';
import { getSubredditAsync } from './searchSlice';

function Search() {
    
    const dispatch = useDispatch();
    return (
        <div  data-testid="searchBar" className={Styles.searchBarContainer}>
            <input 
                className={Styles.searchBar}
                placeholder={'Search a reddit'}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        console.log('Enter hit: ' + e.target.value);
                        dispatch(getSubredditAsync(e.target.value));
                    }
                }}     
            ></input>
        </div>
    )
}

export default Search;
