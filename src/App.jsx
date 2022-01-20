import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx';
import Example from './components/Example.jsx';
import PostItem from './components/PostItem.jsx';
import "./styles/App.css";

const App = () => {
  const [value, setValue] = useState("Some text");

  return (
    <div className='App'>
      <PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} />
    </div>
  );
};

export default App;

