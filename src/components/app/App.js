import React, { useState } from 'react';
import './App.css';
import Catalog from "../catalog"
import Filter from '../filter';
import BasicTable from '../matrix';
import ModelProvider from './model-provider';

function App() {
    
  return (
    <ModelProvider>
      <div id="app">
        <Filter/>
        <Catalog/>
        <BasicTable/>
      </div>
    </ModelProvider>
  );
}

export default App;
