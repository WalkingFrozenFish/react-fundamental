import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center", color: "green" }}>Посты не найдены!</h1>
        )
    }

    // console.log(props)
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'green', }}>
                {title}
            </h1>
            {posts.map((post, index) => {
                return <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            })}
        </div>
    );
};

export default PostList;
