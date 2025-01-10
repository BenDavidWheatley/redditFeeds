import React from 'react';
import Styles from './searchBar.module.css';

function Search(props) {
    
    return (
        <div  data-testid="searchBar" className={Styles.searchBarContainer}>
            <input 
                className={Styles.searchBar} 
                placeholder={'Search'} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        console.log('enter hit: ' + e.target.value);
                        props.userSearch(e.target.value); // Pass the input value to the userSearch function
                    }
                }}>
                
            
            </input>
        </div>
    )
}

export default Search;
/*
</div> <div  data-testid="searchBar" className={Styles.searchBarContainer}>
<input className={Styles.searchBar} placeholder={'Search'} onChange={props.userSearch()}></input>
</div>*/