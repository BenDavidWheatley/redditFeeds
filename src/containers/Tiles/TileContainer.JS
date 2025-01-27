import Style from './tile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import Gallery from '../gallery/gallery';
import Image from '../image/image';
import Video from '../video/video';
import { toggleModal }from '../modal/modalSlice';
import PostInfo from '../postInfo/PostInfo'


function Tile(props) {

    const dispatch = useDispatch();

    const title = props.data.title;
    const author = props.data.author;
    const post = props.data.selftext;
    const category = props.data.category? props.data.category : props.data.subreddit;
    const dateCreated = props.data.created; 
    const result = formatDistanceToNow(new Date(dateCreated * 1000), { addSuffix: true });
    const votes = parseInt(props.data.ups - props.data.downs);
    const totalComments = props.data.num_comments;
    const comments = props.data.url;
    const thumbnail = props.data.thumbnail
    const gallery = props.data?.media_metadata;

     /* Extracting the video */
     const embedHtml = props.data?.secure_media_embed?.content;
     const redditVideo = props.data?.secure_media?.reddit_video;
     let video = null;

     


     if(embedHtml) {
        const regex = /src="(https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+)/;
        const match = embedHtml.match(regex);
         video = match ? match[1] : null;
     } else if (redditVideo){
        video =  props.data?.secure_media?.reddit_video.fallback_url;
     }

     /* Extracting the image */
     let image = null;
     if(props.data.url.includes('jpeg') || props.data.url.includes('png')){
         image = props.data.url;
     }

     let modalObj ={
        title: title,
        author: author,
        post: post,
        category: category,
        date: result,
        votes: votes,
        totalComments: totalComments,
        comments: comments,
        thumbnail: thumbnail,
        gallery: gallery,
        video: video,
        redditVideo: redditVideo,
        image: image

     }


    return (
        <section data-testid="tile" className={`${Style.displayFlex} ${Style.cardContainer} ${Style.imageAndData} ${image || gallery || video ? Style.withImage : Style.withoutImage}`}>

            {/* Left section with image, header and read more links */}        
            <section className={`${Style.leftInnerContainer} ${Style.displayFlex}`}>
                {gallery? ( <Gallery images={gallery} /> ) : 
                image? ( <Image image={image}/> ) :
                video? ( <Video className={Style.videoContainer} video={video}/> ) : null }

                <div>
                    <h2 className={Style.postHeader}>{title}</h2>
                    <p className={image || gallery || video? Style.displayNone : Style.excerpt}>{post}</p>
                    <p className={`${image || gallery || video ? Style.displayNone : Style.display} ${Style.excerptSpan}`}>
                        ...
                    </p>
                    
                    <div className={`${Style.postMeta} ${Style.displayFlex}`}>
                        <p className={Style.category}>{category}</p>
                        <p className={Style.datePost}>{result}</p>
                        <a
                            className={Style.readMoreLink}
                            onClick={() => dispatch(toggleModal(modalObj))}>
                            Read more &gt;
                        </a>      
                    </div>
                </div>
            </section>

            {/* Right section with user info and vote, comments share etc info */}

            <section className={`${Style.postUserInfoContainer} ${Style.displayFlex}`}>

                {/*User info */}

                <div className={`${Style.userInfo} ${Style.displayFlex} ${image || video || gallery? Style.userInfoPostHasImage : Style.postWithoutImage}`}>
                    <img src={thumbnail}></img>
                    <p>{author}</p>
                </div>

                {/* Post sharing, comments etc */}
                
                <PostInfo votes={votes} totalComments={totalComments} />
            </section>
        </section>
    )
} 

export default Tile;
