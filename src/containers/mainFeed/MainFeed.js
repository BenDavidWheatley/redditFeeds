
import Tile from '../tiles/TileContainer';
import Style from './mainFeedComp.module.css';
import React from 'react';

function MainFeed(props) {
    return (
        <div data-testId="mainFeed" className={Style.mainFeedContainer}>

            {props.redditPosts.map((post) => (
                <div key={post.id}>
                    <Tile
                        id={post.id}
                        image={post.image}
                        title={post.title}
                        post={post.post}
                        category={post.category}
                        datePost={post.datePost}
                        votes={post.votes}
                        comments={post.comments}
                        user={post.user}
                        userImage={post.userImage}
                        toggleModal={props.toggleModal}
                    />
                </div>
            ))}
        </div>
    );
}

export default MainFeed;
