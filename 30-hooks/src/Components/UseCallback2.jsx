import React, {useCallback, useEffect} from 'react'
import {useState} from 'react';
import axios from "axios";

export default function UseCallback2({postId}) {
    const [post, setPost] = useState();

    // [before]
    // const getPost = async() => {
    //     const res = await axios.get(
    //      `https://jsonplaceholder.typicode.com/posts/${postId}`
    //     );

    //     console.log(res.data);
    //     setPosst(res.data);
    // };

    // [after]
    const getPost = useCallback(async () => {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        console.log(res.data);
        setPost(res.data);
    }, [postId]);

    useEffect(() => {
        getPost();
    }, [getPost]);
  return (
    <div>
        <h1>UseCallback2</h1>
        {post && (post.id ? post.title : "로딩중..")}
    </div>
  );
}
