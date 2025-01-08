import React from 'react';
import Style from './tile.module.css';
//import Tile from './component/TileComponent';

function Tile(props) {

    return (
        <section data-testid="tile" className={`${Style.displayFlex} ${Style.cardContainer} ${Style.imageAndPostData} ${props.image? Style.withImage : Style.withoutImage}`}>

            {/* Left section with image, header and read more links */}        
            <section className={`${Style.leftInnerContainer} ${Style.displayFlex}`}>

                <img src={props.image} className={props.image? Style.postImage: Style.displayNone}></img>
                <div>
                    <h2 className={Style.postHeader}>{props.title}</h2>

                    <p className={props.image? Style.displayNone : Style.excerpt}>{props.post}</p>
                    <p className={`${props.image? Style.displayNone : Style.display} ${Style.excerptSpan}`}>...</p>
                    
                    <div className={`${Style.postMeta} ${Style.displayFlex}`}>
                        <p className={Style.category}>{props.category}</p>             
                        <p className={Style.datePost}>{props.datePost}</p>   
                        <a className={Style.readMoreLink} >Read more &gt;</a>             
                    </div> 
                </div>
            </section>
            
            {/* Right section with user info and vote, comments share etc info */}

            <section className={`${Style.postUserInfoContainer} ${Style.displayFlex}`}>

                {/*User info */}
                <div className={`${Style.userInfo} ${Style.displayFlex} ${props.image? Style.userInfoPostHasImage : Style.postWithoutImage}`}>
                    <img src={props.userImage}></img>
                    <p>{props.user}</p>
                </div>

                {/* Post sharing, comments etc */}
                
                <div className={`${Style.postInfoContainer} ${Style.displayFlex}`}>
                    <div className={Style.postInfo}>
                        <svg className={Style.voteUp} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9L9 6M9 6L6 9M9 6V12M1.5 9C1.5 4.8579 4.8579 1.5 9 1.5C13.1421 1.5 16.5 4.8579 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.8579 16.5 1.5 13.1421 1.5 9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>{props.votes}</p>
                        <svg className={Style.voteDown} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L9 12M9 12L12 9M9 12V6M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    <div className={Style.postInfo}>
                        <svg className={Style.svg} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.956 7.625C14.956 11.1458 12.1018 14 8.581 14C7.7734 14 7.0009 13.8498 6.28989 13.5759C6.15989 13.5258 6.09489 13.5008 6.0432 13.4889C5.99235 13.4772 5.95555 13.4722 5.90342 13.4703C5.85041 13.4682 5.79225 13.4742 5.67594 13.4862L1.83518 13.8833C1.46899 13.9211 1.2859 13.9401 1.1779 13.8741C1.08383 13.8168 1.01976 13.7209 1.0027 13.6121C0.983119 13.4871 1.07061 13.3251 1.2456 13.0013L2.47234 10.7306C2.57337 10.5436 2.62388 10.4501 2.64676 10.3602C2.66935 10.2715 2.67482 10.2074 2.66759 10.116C2.66027 10.0236 2.61969 9.9032 2.53855 9.66245C2.3229 9.0227 2.20602 8.3375 2.20602 7.625C2.20602 4.10419 5.0602 1.25 8.581 1.25C12.1018 1.25 14.956 4.10419 14.956 7.625Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p>{props.comments}</p>
                    </div>
                    <div className={Style.postInfo}>
                        <svg className={Style.svg} width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.97501 11.0414L3.25 16.5L6.6913 14.4352C6.80357 14.3679 6.85968 14.3342 6.9196 14.321C6.97255 14.3094 7.02745 14.3094 7.0804 14.321C7.14032 14.3342 7.19643 14.3679 7.3087 14.4352L10.75 16.5L10.0257 11.0409M12.25 6.75C12.25 9.6495 9.8995 12 7 12C4.10051 12 1.75 9.6495 1.75 6.75C1.75 3.85051 4.10051 1.5 7 1.5C9.8995 1.5 12.25 3.85051 12.25 6.75Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    <div className={Style.postInfo}>
                        <svg className={Style.svg} width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.4425 10.1325L10.565 13.1175M10.5575 4.8825L5.4425 7.8675M14.75 3.75C14.75 4.99264 13.7427 6 12.5 6C11.2573 6 10.25 4.99264 10.25 3.75C10.25 2.50736 11.2573 1.5 12.5 1.5C13.7427 1.5 14.75 2.50736 14.75 3.75ZM5.75 9C5.75 10.2427 4.74264 11.25 3.5 11.25C2.25736 11.25 1.25 10.2427 1.25 9C1.25 7.75732 2.25736 6.75 3.5 6.75C4.74264 6.75 5.75 7.75732 5.75 9ZM14.75 14.25C14.75 15.4927 13.7427 16.5 12.5 16.5C11.2573 16.5 10.25 15.4927 10.25 14.25C10.25 13.0073 11.2573 12 12.5 12C13.7427 12 14.75 13.0073 14.75 14.25Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>

            </section>
        </section>
    )
} 

export default Tile;
