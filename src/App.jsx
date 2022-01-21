import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx';
import Example from './components/Example.jsx';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyInput from './components/UI/input/MyInput.jsx';
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" })
  }

  return (
    <div className='App'>
      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder='Название поста'
        />
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={"Языки программирования"} />
    </div>
  );
};

export default App;

