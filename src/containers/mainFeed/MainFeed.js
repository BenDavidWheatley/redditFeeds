
import Tile from '../tiles/TileContainer';
import Style from './mainFeedComp.module.css';
import React from 'react';

function MainFeed(props) {
    if (!props.redditPosts) {
        console.log(props.redditPosts + 'rtes');
        return null; // Return nothing if props are missing
    } else {
        console.log(props.redditPosts.data.children[0].data);

        return (
            <div data-testid="mainFeed" className={Style.mainFeedContainer}>
                {props.redditPosts.data.children.map((post) => {
                    let video = null;
                    let gallery = null;

                    // Extract video URL if present
                    if (post.data?.secure_media?.reddit_video) {
                        video = post.data?.secure_media?.reddit_video.fallback_url;
                    }

                    // Extract gallery images if present
                    if (post.data?.gallery_data && post.data?.media_metadata) {
                        const galleryItems = post.data.gallery_data.items;
                        const mediaMetadata = post.data.media_metadata;

                        gallery = galleryItems.map((item) => {
                            const mediaId = item.media_id; // Get the media ID
                            const mediaDetails = mediaMetadata[mediaId]; // Get metadata for this ID
                            if (mediaDetails && mediaDetails.s && mediaDetails.s.u) {
                                return mediaDetails.s.u; // Return the source URL
                            } else {
                                console.error(`Missing media details for media_id: ${mediaId}`);
                                return null;
                            }
                        }).filter(Boolean); // Remove null values
                    }

                    return (
                        <div key={post.data.id}>
                            <Tile
                                id={post.data.id}
                                image={post.data.url.includes('jpeg') ? post.data.url : false}
                                gallery={gallery} // Pass the extracted gallery images
                                title={post.data.title}
                                post={post.data.selftext}
                                category={post.data.category || post.data.subreddit}
                                datePost={post.data.created}
                                video={video}
                                votes={parseInt(post.data.ups - post.data.downs, 10)}
                                comments={post.data.num_comments} // Fixed to use num_comments
                                user={post.data.author}
                                userImage={post.data.userImage}
                                toggleModal={props.toggleModal}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default MainFeed;





/*import Tile from '../tiles/TileContainer';
import Style from './mainFeedComp.module.css';
import React from 'react';

function MainFeed(props) {
  // console.log(props.redditPosts.data.children[0].data)
   if(!props.redditPosts){
    console.log(props.redditPosts + 'rtes')
   }else {
   
    
    console.log(props.redditPosts.data.children[0].data)
   
   return (
        <div data-testid="mainFeed" className={Style.mainFeedContainer}>
    
            {props.redditPosts.data.children.map((post) => {
            
        
            let video;
            let gallery;

            if (post.data?.secure_media?.reddit_video) {
                video = post.data?.secure_media?.reddit_video.fallback_url;
            } else if (post.data?.gallery_data){

                const galleryItems = post.data.gallery_data.items; // Access gallery items
                const mediaMetadata = post.data.media_metadata; 
                const imageUrls = galleryItems.map((item) => {
                    const mediaId = item.media_id; // Get the media ID
                    const mediaDetails = mediaMetadata[mediaId]; // Get metadata for this ID
                    
                    // Check if mediaDetails exists and has a valid source URL
                    if (mediaDetails && mediaDetails.s && mediaDetails.s.u) {
                        return mediaDetails.s.u; // Return the source URL
                    } else {
                        console.error(`Missing media details for media_id: ${mediaId}`);
                        return null; // Handle missing or invalid data
                    }
                }).filter(Boolean); // Remove null values
            
                console.log("Extracted Image URLs:", imageUrls);
            } else {
                console.error("gallery_data or media_metadata is missing.");
            }
               /* gallery = 'https://preview.redd.it/' + post.data?.gallery_data.items[0].media_id + '.jpg';
                console.log(gallery)*/
            
                 //let date = new Date(post.data.created 
                 // (response.ok && response.headers.get('content-type').includes('image')) *)
              /*  return (
                <div key={post.id}>
                    <Tile
                        id={post.data.id}
                        image={post.data.url.includes('jpeg')? post.data.url : false}
                        gallery={gallery}
                        title={post.data.title}
                        post={post.data.selftext}
                        category={post.data.category? post.data.category: post.data.subreddit }
                        datePost={post.data.created}
                        video={video}
                        votes={parseInt(post.data.ups - post.data.downs)}
                        comments={post.data.comments}
                        user={post.data.author}
                        userImage={post.data.userImage}
                        toggleModal={props.toggleModal}
                    />
                </div>
                )
                })}
        </div>
    );
}

}

export default MainFeed;*/
