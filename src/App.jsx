import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx';
import Example from './components/Example.jsx';
import PostForm from './components/PostForm.jsx';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyInput from './components/UI/input/MyInput.jsx';
import MySelect from './components/UI/select/MySelect.jsx';
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    console.log(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <MySelect
        onChange={sortPosts}
        value={selectedSort}
        options={[
          {
            value: "title",
            name: "По названию"
          },
          {
            value: "body",
            name: "По описанию"
          }
        ]}
        defaultValue="Сортировка" />

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={"Языки программирования"} />
        : <h1 style={{ textAlign: "center", color: "green" }}>Посты не найдены!</h1>
      }
    </div>
  );
};

export default App;

