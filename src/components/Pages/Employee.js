// Employee.js
import React, { useState } from 'react';
import './main.css'

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
    Responsibilities_1:'',
    Responsibilities_2:'',
    Responsibilities_3:'',
    Responsibilities_4:'',
    Responsibilities_5:'',
    Responsibilities_6:'',
    Responsibilities_7:'',
  });

  // const [isEditing, setIsEditing] = useState(false);
  // const [editJobId, setEditJobId] = useState(null);

  const handleJobFormSubmit = (e) => {
    e.preventDefault();

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
        Responsibilities_1:'',
        Responsibilities_2:'',
        Responsibilities_3:'',
        Responsibilities_4:'',
        Responsibilities_5:'',
        Responsibilities_6:'',
        Responsibilities_7:'',
      });
    } else {
      // Handle validation or display an error message
      alert("Please fill in all required fields (title, company, location).");
    }


  };



  return (
    <div className='login'>
      <form onSubmit={handleJobFormSubmit} className="form bg-body-secondary col-lg-5 col-10 p-5 rounded rounded-3 d-flex flex-column post-job m-0 p-0">
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

        <button type="submit" className='btn btn-outline-primary mt-3'>POST</button>
      </form>
    </div>
  );
}

export default Employee;
