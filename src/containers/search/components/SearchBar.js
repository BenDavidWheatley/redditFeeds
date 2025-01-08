import React from 'react';
import Styles from './searchBar.module.css';

function SearchBar() {
    return (
        <div className={Styles.searchBarContainer}>
            <input className={Styles.searchBar} placeholder={'Search'}></input>
        </div>
    )
}

export default SearchBar;