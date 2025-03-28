import React from 'react';
import Styles from './header.module.css';
import Search from '../search/Search';

function Header(props) {
    return (
        <section  data-testid="header"  className={Styles.headerContainer}>
                <img src={'../../../media/redditLogo.png'} height={'80px'} width={'247px'} alt='reddit logo'/>
                <Search userSearch={props.userSearch}/>       
        </section>
    )
}
export default Header;