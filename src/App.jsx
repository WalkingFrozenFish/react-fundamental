import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter.jsx';
import Counter from './components/Counter.jsx';
import Example from './components/Example.jsx';

const App = () => {
  const [value, setValue] = useState("Some text");

  return (
    <div className='App'>
      <Counter />
      <Example />
      <ClassCounter />
    </div>
  );
};

export default App;

