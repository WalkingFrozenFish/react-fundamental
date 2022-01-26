import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import MyButton from './components/UI/button/MyButton.jsx';
import MyModal from './components/UI/modal/MyModal.jsx';

import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log("Функция сортировки постов отработала");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Языки программирования"} />
    </div>
  );
};

export default App;

