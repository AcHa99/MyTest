import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Components/Sidebar.css';
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <div className='App'>
        
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
