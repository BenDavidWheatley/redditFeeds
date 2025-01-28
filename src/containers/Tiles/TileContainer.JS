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
    const iconImage = props.iconImage;
    console.log(iconImage);

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
        <div data-testid="tile" className={`${Style.displayFlex} ${Style.cardContainer} ${Style.imageAndData} ${image || gallery || video ? Style.withImage : Style.withoutImage}`}>

            {/* Left section with image, header and read more links */}        
            <div className={`${Style.leftInnerContainer} ${Style.displayFlex}`}>
                {gallery? ( <Gallery images={gallery} /> ) : 
                image? ( <Image image={image}/> ) :
                video? ( <Video className={Style.videoContainer} video={video}/> ) : null }

                <div>
                    <h2 className={`${image || gallery || video ? Style.postHeader : Style.noImageHeader}`}>{title}</h2>
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
            </div>

            {/* Right section with user info and vote, comments share etc info */}

            <div className={`${Style.postUserInfoContainer}`}>

                {/*User info */}

                <div className={`${Style.userInfo} ${Style.displayFlex} ${image || video || gallery? Style.userInfoPostHasImage : Style.postWithoutImage}`}>
                    {iconImage? <img className={Style.userInfoImg} src={iconImage}></img> : <svg className={Style.userInfoImg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path></svg>
                                        }                    
                    <p>{author}</p>
                </div>

                {/* Post sharing, comments etc */}
                
                <PostInfo votes={votes} totalComments={totalComments} />
            </div>
        </div>
    )
} 

export default Tile;
