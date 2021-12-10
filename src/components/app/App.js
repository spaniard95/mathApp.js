import React, { useState } from "react";
import "./App.css";
import Catalog from "../catalog";
import FilterContainer from "../filterContainer";
import TablesContainer from "../tablesContainer";
import ModelProvider from "./model-provider";
import Accordion from "../accordionTables";

function App() {
  return (
    <ModelProvider>
      <div id="app">
        <FilterContainer />
        <Catalog />
        <TablesContainer />
      </div>
    </ModelProvider>
  );
}

export default App;
