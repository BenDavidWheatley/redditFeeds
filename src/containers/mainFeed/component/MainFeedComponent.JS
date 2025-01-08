import React from 'react';
import TileContainer from '../../tiles/TileContainer';
import Style from './mainFeedComp.module.css';

function MainFeedComponent(props) {
    return (
        <div className={Style.mainFeedContainer}>
            <TileContainer redditPosts={props.redditPosts} toggleModal={props.toggleModal} />
        </div>
    );
};

export default MainFeedComponent;