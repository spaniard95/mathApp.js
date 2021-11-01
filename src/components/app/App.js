import React, { useState } from 'react';
import './App.css';
import Catalog from "../catalog"
import Filter from '../filter';
import ModelProvider from './model-provider';

function App() {
  const [checks, setChecks] = useState([false, false, false])
    
  function handleChange(event) {
    setChecks(prevState => {
              const arr = prevState.slice();
              arr[event.target.value] = !prevState[event.target.value];
              console.log(arr);
              return arr;
          }
      );
  };

  return (
    <ModelProvider>
      <div id="app">
        <Filter handleChange={handleChange}/>
        <Catalog checks={checks}/>
      </div>
    </ModelProvider>
  );
}

export default App;
