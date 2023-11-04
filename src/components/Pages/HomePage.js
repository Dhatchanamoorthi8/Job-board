// HomePage.js
import React, { useState,useEffect } from 'react';
import './main.css'
import JobListing from '../JobListing';
import jobData from '../Data/jobData';


function HomePage({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobData.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobData = JSON.parse(localStorage.getItem('jobData')) || [];
    setJobs(storedJobData);
  }, [])


  return (
    <div>

      <div className="home-head">
        <nav className="navbar navbar-expand-lg col-12 col-lg-12">
          <div className="container-fluid">
            <a className="navbar-brand" href="home">
              <img src={require("../img/job-search (2).png")} alt="Bootstrap" width="50" height="50" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-center text-light" aria-current="page" href="home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center text-light" href="employee">
                    Employee
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-center text-light" href="Candidate">
                    Candidate
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className='text-center'>
                  <button className="btn btn-danger text-center " onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="search-bars mt-5">
          <form className="col-lg-5 col-10" role="search">
            <div className="input-group">
              <input
                className="form-control search-bar me-2"
                type="text"
                placeholder="Search Jobs"
                value={searchQuery}
                onChange={handleSearch}
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
            </div>
          </form>
        </div>
      </div>

      {filteredJobs.map((job, index) =>
        (<JobListing key={index} job={job} />))}

      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}


    </div>


  );


}
export default HomePage;
