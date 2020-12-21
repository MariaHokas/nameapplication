import React from 'react';
import './index.js';

import './App.css';
import ContextComponent from './ContextComponent.js';
import {ThemeProvider} from './ThemeContext';

function App() {

  return (
    <>
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
    </>
  );
}

export default App;
