import MainFeedComponent from './component/MainFeedComponent';
import React from 'react';

function MainFeed(props) {
    return(
        <MainFeedComponent redditPosts={props.redditPosts} toggleModal={props.toggleModal}/>
    )
}

export default MainFeed;
