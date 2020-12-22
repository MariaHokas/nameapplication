import React from 'react';
import './index.js';

import './App.css';
import ContextComponent from './Context/ContextComponent';
import {ThemeProvider} from './Context/ThemeContext';

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
