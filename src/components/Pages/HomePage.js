// HomePage.js
import React, { useState, useEffect} from 'react';
import './main.css'
import JobListing from '../JobListing';
import jobData from '../Data/jobData';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
function HomePage({ onLogout }) {
  const handleLogout = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "logout successfully"
    })
    setTimeout(() => {
      onLogout();
    },100);
    
    
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


const toggleDarkMode = () => {
  setIsDarkMode((prevMode) => !prevMode);
  // Save the mode preference in local storage
  localStorage.setItem('isDarkMode', !isDarkMode);
};

const [isDarkMode, setIsDarkMode] = useState(() => {
  // Initialize the state with the value from local storage, defaulting to false (light mode)
  return JSON.parse(localStorage.getItem('isDarkMode')) || false;
});


// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate();

// const loginclick =(e)=>{
//   e.preventDefault()
//   if (username === 'admin' && password === 'admin') {
//     const Toast = Swal.mixin({
//       toast: true,
//       position: "top-end",
//       showConfirmButton: false,
//       timer: 2000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.onmouseenter = Swal.stopTimer;
//         toast.onmouseleave = Swal.resumeTimer;
//       }
//     });
//     Toast.fire({
//       icon: "success",
//       title: "login in successfully"
//     })
//       navigate('/employee');
      
//   } else {
//     alert('Invalid username or password');
//   }
// }
// const Swal = require('sweetalert2')

  return (
    <div>

      <div className={`home-head ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <nav className={`navbar navbar-expand-lg col-12 col-lg-12 `}>
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
                  <a className="nav-link active text-center text-light link-1" aria-current="page" href="home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                <Link to="/employee" className="nav-link text-center text-light link-2">Employee</Link>
                  {/* <a className="nav-link text-center text-light link-2" 
                  href="employee">
                    Employee
                  </a> */}
                </li>
                <li className="nav-item">
                <Link to="/candidate" className="nav-link text-center text-light link-3">Candidate</Link>
                  {/* <a  href="Candidate">
                    Candidate
                  </a> */}
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li>
                  <button className="btn btn-secondary text-center" onClick={toggleDarkMode}>
                    Toggle Mode
                  </button>

                </li> */}
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
        {/* <div class="modal fade" id="empolyee-form" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" data-backdrop="static">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Employee Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div class="card-body">
        <form action="" class="form-control " onSubmit={loginclick} >
          <label for="username">username</label>
          <input type="text" name="username" id="username"  class="form-control" onChange={(e) => setUsername(e.target.value)}/>
          <label for="username">password</label>
          <input type="password" name="password" id="password" class="form-control" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className='btn btn-primary col-12 mt-3' >Login</button>
        </form>
      </div>
    </div>
  </div>
</div> */}
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
