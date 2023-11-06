// Employee.js
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'

function Employee({ onJobSubmit }) {

  useEffect(() => {
    const alertTrigger = document.getElementById('liveAlertBtn');
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

    const alert = (message, type) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');

      alertPlaceholder.innerHTML = ''; // Clear previous alerts
      alertPlaceholder.appendChild(wrapper);
      setTimeout(() => {
        alertPlaceholder.innerHTML = '';
      },2000)
    };

    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        alert('Your Job is Update Successfully ✔', 'success');
      });
    }
  }, []);
;



  const [newJob, setNewJob] = useState({
    id: Math.floor(Math.random()), // Generate a unique ID for the new job
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    img: '',
    Role: '',
    Responsibilities_1: '',
    Responsibilities_2: '',
    Responsibilities_3: '',
    Responsibilities_4: '',
    Responsibilities_5: '',
    Responsibilities_6: '',
    Responsibilities_7: '',
  });

  const [refreshPage, setRefreshPage] = useState(false);
  const navigate = useNavigate();
  const handleJobFormSubmit = (e) => {
    e.preventDefault();
    

    setTimeout(() => {
      navigate('/home');
    },2100);
    // Ensure that all required fields are filled

    if (newJob.title && newJob.company && newJob.location) {

      onJobSubmit(newJob);

      setNewJob({
        id: Math.floor(Math.random()),
        title: '',
        company: '',
        location: '',
        salary: '',
        description: '',
        img: '',
        Role: '',
        Responsibilities_1: '',
        Responsibilities_2: '',
        Responsibilities_3: '',
        Responsibilities_4: '',
        Responsibilities_5: '',
        Responsibilities_6: '',
        Responsibilities_7: '',
      });
      setRefreshPage(true);
    } else {
      // Handle validation or display an error message
      alert("Please fill in all required fields (title, company, location).");
    }


  };
  useEffect(() => {
    if (refreshPage) {
      setTimeout(() => {
        navigate('/employee');
        setRefreshPage(false); // Reset the state to prevent further refreshes
      }, 100);
    }
  }, [refreshPage, navigate]);




  return (
    <div className='row m-0 p-0'>
      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
        <form onSubmit={handleJobFormSubmit} className="form bg-body-secondary col-lg-12 col-12 p-5 rounded rounded-3 d-flex flex-column post-job m-0 p-0 mt-5">
          <input
            type="text"
            placeholder="Job Title"
            value={newJob.title}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company Name"
            value={newJob.company}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
          />
          <input
            type="text"
            placeholder="Salary"
            value={newJob.salary}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
          />
          <input
            placeholder="Description"
            value={newJob.description}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
          />
          <input
            type="url"
            placeholder="Image URL"
            value={newJob.img}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, img: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newJob.Role}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, Role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Responsibilities_1"
            value={newJob.Responsibilities_1}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, Responsibilities_1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Responsibilities_2"
            value={newJob.Responsibilities_2}
            className='form-control'
            onChange={(e) => setNewJob({ ...newJob, Responsibilities_2: e.target.value })}
          />
          <button 
          type="submit" 
          className='btn btn-outline-primary mt-3'
          id="liveAlertBtn"
          >POST</button>
          
        </form>
        
      </div>

      <div className="col-12 col-lg-6 col-md-6 col-sm-12">
        <div className="card col-lg-12 mt-5">
          <b className='text-center border'>PREVIW CARD FOR JOB POST</b>
          <div className="card-body job-card">
            <h3>{newJob.title}</h3>
            <p>Company: {newJob.company}</p>
            <p>Location: {newJob.location}</p>
            <p>Salary: {newJob.salary}</p>
            <p>description{newJob.description}</p>
            <ul>{newJob.Role}
              <li>{newJob.Responsibilities_1}</li>
              <li>{newJob.Responsibilities_2}</li>
              <li>{newJob.Responsibilities_3}</li>
            </ul>
            <img src={newJob.img} alt='images' className="img-fluid job-img" />
          </div>
        </div>
        <p id="liveAlertPlaceholder"></p>
      </div>
    </div>
  );
}

export default Employee;
