import React, { useState } from 'react';
import './App.css';
import Catalog from "../catalog"
import Filter from '../filter';
import ModelProvider from './model-provider';

function App() {
    
  return (
    <ModelProvider>
      <div id="app">
        <Filter/>
        <Catalog/>
      </div>
    </ModelProvider>
  );
}

export default App;
