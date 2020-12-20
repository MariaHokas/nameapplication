import React from 'react';
import './index.js';
import NameFetch from './Pages/NameFetch.js';
import AmountFetch from './Pages/AmountFetch.js';
import './App.css';
import ContextComponent from './ContextComponent.js';
import {ThemeProvider} from './ThemeContext';

function App() {

  return (
    <>
    <ThemeProvider>
      <header>
        <h1>Hello there, welcome to the Name Application!</h1>
      </header>
      <AmountFetch />
      <NameFetch />

      <ContextComponent />
    </ThemeProvider>
    </>
  );
}

export default App;
