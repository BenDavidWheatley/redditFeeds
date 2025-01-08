import React from 'react';
import Tile from './component/TileComponent';

function TileContainer(props) {
    console.log(typeof props.redditPosts); // Ensure props.redditPosts is an array

    return (
        <div>
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

export default TileContainer;
