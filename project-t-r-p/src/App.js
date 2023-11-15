import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Homepage from './Pages/Homepage.js';
import AboutPage from './Pages/AboutPage.js';
import PortfolioPage from './Pages/PortfolioPage.js';
import ReminderPage from './Pages/ReminderPage.js';
import ToDoListPage from './Pages/ToDoListPage.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/reminder" element={<ReminderPage />} />
        <Route path="/ToDoList" element={<ToDoListPage />} />
        <Route path="/My project List" element={<ProjectListPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
