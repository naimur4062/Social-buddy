import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h1>This is post detail: {id}</h1>
            <h3>User Id: {post.id}</h3>
            <p>Title: {post.title}</p>
            <p>Title Body: {post.body}</p>
            <h5>Comments are: {comments.length}</h5>
            {
                comments.map(comment => <Comment comment={comment}/>)
            }
        </div>
    );
};

export default PostDetail;