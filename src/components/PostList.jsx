import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    // console.log(props)
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green', }}>
                {props.title}
            </h1>
            {props.posts.map((post, index) => {
                return <PostItem remove={props.remove} number={index + 1} post={post} key={post.id} />
            })}
        </div>
    );
};

export default PostList;
