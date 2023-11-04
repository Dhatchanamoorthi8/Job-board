// App.js
import './App.css';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import Employee from './components/Pages/Employee';

import React, { useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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

  // Function to save job data to local storage
  const saveJobData = (data) => {
    localStorage.setItem('jobData', JSON.stringify(data));
    setJobData(data);
  };

  useEffect(() => {
    loadJobData();
  }, []);

  // Your existing login and logout functions...

  const handleJobSubmit = (newJob) => {
    // Append the new job to the existing jobData
    const updatedJobData = [...jobData, newJob];
    // Save the updated data in local storage
    saveJobData(updatedJobData);
  };








  // const handleJobSubmit = (newJob) => {
  //   const updatedJobData = [...jobData, newJob];
  //   localStorage.setItem('jobData', JSON.stringify(updatedJobData));
  //   setJobData(updatedJobData);
  // };


  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!loggedIn ? <LoginPage setLoggedIn={handleLogin} /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={loggedIn ? <HomePage onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/employee"
          element={loggedIn ? <Employee onJobSubmit={handleJobSubmit} /> : <Navigate to="/login" />}
        />

        <Route index={true} element={<Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}

export default App;
