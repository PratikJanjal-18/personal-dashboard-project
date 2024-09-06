import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/SideBar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
