import './App.css';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import Employee from './components/Pages/Employee';
import Candidate from './components/Pages/Candidate';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const storedLoggedIn = localStorage.getItem('loggedIn');
  const [loggedIn, setLoggedIn] = useState(storedLoggedIn === 'true');
  
  const [jobData, setJobData] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };

  const loadJobData = () => {
    const storedData = localStorage.getItem('jobData');
    if (storedData) {
      setJobData(JSON.parse(storedData));
    }
  };

  const saveJobData = (data) => {
    localStorage.setItem('jobData', JSON.stringify(data));
    setJobData(data);
  };

  useEffect(() => {
    loadJobData();
  }, []);

  const handleJobSubmit = (newJob) => {
    const updatedJobData = [...jobData, newJob];
    saveJobData(updatedJobData);
  };

  return (
    <BrowserRouter basename="/job-board">
      <Routes>
        <Route
          path="/job-board"
          element={!loggedIn ? <LoginPage setLoggedIn={handleLogin} /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={loggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/employee"
          element={loggedIn ? <Employee onJobSubmit={handleJobSubmit} /> : <Navigate to="/job-board" />}
        />
        <Route
          path="/candidate"
          element={loggedIn ? <Candidate/> : <Navigate to="/job-board" />}
        />
  
        <Route index={true} element={<Navigate to="/job-board" />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
