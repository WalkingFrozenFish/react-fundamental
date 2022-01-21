import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green', }}>
                {props.title}
            </h1>
            {props.posts.map(post => {
                return <PostItem post={post} key={post.id} />
            })}
        </div>
    );
};

export default PostList;
