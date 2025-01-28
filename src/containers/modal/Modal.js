
import React from 'react';
import Style from './modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from './modalSlice';
import Comments from '../comments/Comments';
import Gallery from '../gallery/gallery';
import Video from '../video/video';
import Image from '../image/image';
import PostInfo from '../postInfo/PostInfo';

function Modal(props) {
    const display = useSelector((state) => state.toggleModal.toggle);
    const data =  useSelector((state) => state.toggleModal.data);
    const dispatch = useDispatch();
    const modal = true;
    return (
        <div data-testid='modalMainContainer' className={display ? Style.show : Style.hide}>
            <section data-testid="modal" className={Style.modalBackgroundBlur}>
                <div className={Style.modalContainer}>
                    <a className={Style.readMoreLink} onClick={() => dispatch(toggleModal())}>
                        Close
                    </a>
                    {data && data.gallery ? ( <Gallery class={Style.media} images={data.gallery} modal={true}/> ) : 
                    data && data.image ? ( <Image class={Style.media}  image={data.image} modal={true}/> ) :
                    data && data.video ? ( <Video className={`${Style.videoContainer} ${Style.media}`} video={data.video} modal={true}/> ) : null }

                {data && (
                    <div className={Style.infoContainer}>
                        <h2 className={Style.modalHeader}>{data.title}</h2>
                        <p className={Style.post}>{data.post}</p>
                        <div className={`${Style.postMeta} ${Style.displayFlex}`}>
                            <div className={`${Style.displayFlex} ${Style.postingDetails}`}>
                                <p className={Style.category}>{data.category}</p>
                                <p className={Style.userInfo}>{data.author}</p>
                                <p className={Style.datePost}>{data.date}</p>
                            </div>
                            
                            <PostInfo totalComments={data.totalComments} votes={data.votes} modal={modal}/>                    
                        </div>
                        
                        <Comments postUrl={data.comments} />
                    </div>
                )}
                 </div>
            </section>
        </div>
    );
}

export default Modal;
