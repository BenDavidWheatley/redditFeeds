import React from 'react';
import Styles from './header.module.css';
import Search from '../search/Search';

function Header() {
    return (
        <section className={Styles.headerContainer}>
           
                <img src={'../../../media/redditLogo.png'} height={'80px'} width={'247px'}/>
                <Search />
            
        </section>
    )
}
export default Header;