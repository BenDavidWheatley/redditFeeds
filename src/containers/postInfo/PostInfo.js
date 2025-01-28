import React from 'react';
import Style from './postInfo.module.css';


function PostInfo(props) {
    return (
        <div className={props.modal? `${Style.postInfoContainer} ${Style.displayRow} ${Style.modal}` : `${Style.postInfoContainer} ${Style.displayFlex}`  }>
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

                <p>{props.totalComments}</p>
            </div>
        </div>
    )
}

export default PostInfo;


