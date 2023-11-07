// Employee.js
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css'
import Swal from 'sweetalert2'

function Employee({ onJobSubmit }) {



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

  const navigate = useNavigate();
  const handleJobFormSubmit = (e) => {
    e.preventDefault();
  


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
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 1900,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Your Job is Posted ",
      })
      setTimeout(() => {
        navigate('/home');
      },2100);
    } else {
      Swal.fire({
        title: "Please Add Data",
        icon: "error",
      });
    }


  };




  return (
    <div className='row m-0 p-0 employee-page'>
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
            placeholder="Logo (url)"
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

      <div className="col-12 col-lg-6 col-md-6 col-sm-12 ps-5">
        <div className="card col-lg-11 mt-5">
          <b className='text-center border'>PREVIW CARD FOR JOB POST</b>
          <div className="card-body job-card">
            <h3>{newJob.title}</h3>
            <p>Company : {newJob.company}</p>
            <p>Location : {newJob.location}</p>
            <p>Salary : {newJob.salary}</p>
            <p>description {newJob.description}</p>
            <ul className='navbar-nav'>{newJob.Role}
              <li className='nav-item'>{newJob.Responsibilities_1}</li>
              <li className='nav-item'>{newJob.Responsibilities_2}</li>
              <li className='nav-item'>{newJob.Responsibilities_3}</li>
            </ul>
            <img src={newJob.img} alt='logo' className="img-fluid job-img border border-2" />
          </div>
        </div>
        <p id="liveAlertPlaceholder"></p>
      </div>
    </div>
  );
}

export default Employee;
