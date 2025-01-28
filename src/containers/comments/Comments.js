import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, clearComments } from '../comments/commentSlice';
import Style from './comments.module.css'

function Comments({ postUrl }) {
    const dispatch = useDispatch();
    const { comments, loading, error } = useSelector((state) => state.comments);

    useEffect(() => {
        if (postUrl) {
            dispatch(fetchComments(postUrl));
        }
        // Clear comments when the component unmounts
        return () => {
            dispatch(clearComments());
        };
    }, [dispatch, postUrl]);

    if (loading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments: {error}</p>;
    if (!comments.length) return <p>No comments available.</p>;

    // Recursive function to render comments and replies
    const renderComments = (commentList) => {
        return (
            <ul className={Style.commentLists}>
                {commentList.map((comment) => (
                    <li className={Style.commentContainer}  key={comment.id}>
                        <p><strong className={Style.author}>{comment.author}</strong>: {comment.body}</p>
                        {comment.replies && comment.replies.length > 0 && (
                            <div className={Style.replies}>
                                {renderComments(comment.replies)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return <div>{renderComments(comments)}</div>;
}

export default Comments;
