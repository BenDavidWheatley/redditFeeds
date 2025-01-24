import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments, clearComments } from './commentSlice';

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

    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                    <p>This is a test</p>
                    <p><strong>{comment.author}</strong>: {comment.body}</p>
                </li>
            ))}
        </ul>
    );
}

export default Comments;
