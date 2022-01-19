import React, { useState } from 'react';
import Counter from './components/Counter.jsx';

const App = () => {
  const [value, setValue] = useState("Some text");

  return (
    <div className='App'>
      <Counter />
    </div>
  );
};

export default App;

