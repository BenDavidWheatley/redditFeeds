import Tile from '../tiles/TileContainer';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Style from './mainFeedComp.module.css';

function MainFeed(props) {

    const reddits = props.reddits;
 

    return (
        <div  data-testid="mainFeed"  className={Style.container}>
            {reddits && reddits.data && reddits.data.children ? (
                reddits.data.children.map((child, index) => (
                    <div key={index}>
                        <Tile data={child.data} iconImage={props.iconImage}/>
                    </div>
                ))
            ) : (
                <div data-testid="circle" className={Style.loadingContainer}>
                    <div className={Style.circle}></div>
                    <p className={Style.loading}>Loading...</p>
                </div>
            )}
        </div>
    );
}
export default MainFeed;
