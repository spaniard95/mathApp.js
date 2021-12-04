import React, { useState } from 'react';
import './App.css';
import Catalog from "../catalog"
import Filter from '../filter';
import TablesContainer from "../tablesContainer";
import ModelProvider from './model-provider';
import Accordion from '../accordionTables';

function App() {
    
  return (
    <ModelProvider>
      <div id="app">
        <Filter/>
        <Catalog/>
        <TablesContainer/>
      </div>
    </ModelProvider>
  );
}

export default App;
