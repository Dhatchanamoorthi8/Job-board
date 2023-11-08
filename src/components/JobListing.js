// src/components/JobListing.js
import React from 'react';
import '../components/Pages/main.css'
import Swal from 'sweetalert2';
import { useState} from 'react';
function JobListing({ job }) {


  const [data, SetData] = useState([{
    id: Math.floor(Math.random()),
    name: "",
    email: "",
    status: "",
  }])
  const submitdata = async (e) => {
    e.preventDefault();
    
    // Serialize the form data (you can use a library like FormData for this)
    const formData = new FormData(e.target);
  
    // Display success message immediately
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
  
    // Send the form data to the server (you can use the fetch API)
    try {
      const response = await fetch('https://formsubmit.co/dhatchanamoorthiapcse19@jkkmct.edu.in', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data));
        SetData(data);
        e.target.reset();
      } else {
        
        Swal.fire({
          icon: 'error',
          title: 'Form submission failed',
          text: 'Please try again later.',
        });
      }
    } catch (error) {
      // Handle network or other errors
      Swal.fire({
        icon: 'error',
        title: 'An error occurred',
        text: 'Please try again later.',
      });
    }
  };
  
  

  return (
    <div className={`Job-list`}>
      <div className="card col-12 col-lg-6 ">
        <div className="card-body job-card">
          <h3 className='job-title'>{job.title}</h3>
          <p className='job-para'>Company: {job.company}</p>
          <p className='job-para'>Location: {job.location}</p>
          <p className='job-para'>Salary: {job.salary}</p>
          <p className='job-para'>{job.description}</p>
          <img src={job.img} alt='no' className="img-fluid job-img" />
          <button type="submit" className='btn btn-outline-success'
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">Apply</button>

          <button type="button" className='btn btn-outline-secondary  ms-3'
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${job.id}`}>View Description</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Application</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form
                    method="POST"
                    onSubmit={submitdata}
                    enctype="multipart/form-data"
                    >

                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">FirstName</label>
                      <input type="text" class="form-control" id="recipient-name" name="First-name"
                        value={data.name}
                        onChange={(e) => SetData({ ...data, name: e.target.value })}
                        required />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Email ID</label>
                      <input class="form-control" id="message-text" type='email' name="email"
                        value={data.email}
                        onChange={(e) => SetData({ ...data, email: e.target.value })}
                        required />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Phone Number</label>
                      <input class="form-control" id="message-text" type='tel' name='phone number' required />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Address</label>
                      <textarea class="form-control" id="message-text" name='address' required />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Resume attach</label>
                    </div>
                    <input class="form-control" id="message-text"  type="file"  name="attachment" 
                    accept="pdf"/>

                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_next" value="https://dhatchanamoorthi8.github.io/job-board/"/>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary" >Send message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id={`exampleModal-${job.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id={`exampleModalLabel-${job.id}`}>Job Decsription</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h3 className='job-title'>{job.title}</h3>
                  <p className='job-para'>{job.Role}</p>
                  <ul className='job-Responsibilities'>
                    <li>{job.Responsibilities_1}</li>
                    <li>{job.Responsibilities_2}</li>
                    <li>{job.Responsibilities_3}</li>
                    <li>{job.Responsibilities_4}</li>
                    <li>{job.Responsibilities_5}</li>
                    <li>{job.Responsibilities_6}</li>
                    <li>{job.Responsibilities_7}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default JobListing;
