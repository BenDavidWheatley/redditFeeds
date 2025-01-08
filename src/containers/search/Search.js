import React from 'react';
import Styles from './searchBar.module.css';

function Search() {
    return (
        <div  data-testid="searchBar" className={Styles.searchBarContainer}>
            <input className={Styles.searchBar} placeholder={'Search'}></input>
        </div>
    )
}

export default Search;