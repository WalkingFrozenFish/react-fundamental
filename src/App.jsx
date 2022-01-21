import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx';
import Example from './components/Example.jsx';
import PostItem from './components/PostItem.jsx';
import PostList from './components/PostList.jsx';
import "./styles/App.css";

const App = () => {
  const [posts1, setPosts1] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 4, title: "Python", body: "Description" },
    { id: 5, title: "HTML", body: "Description" },
    { id: 6, title: "CSS", body: "Description" },
  ]);

  return (
    <div className='App'>
      <PostList posts={posts1} title={"Языки программирования 1"} />
      <PostList posts={posts2} title={"Языки программирования 2"} />
    </div>
  );
};

export default App;

