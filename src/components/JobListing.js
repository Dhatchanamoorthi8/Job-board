// src/components/JobListing.js
import React from 'react';
import '../components/Pages/main.css'
import Swal from 'sweetalert2';
function JobListing({ job}) {
 
  const formsubmit = () =>{
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  

  return (
    <div className={`Job-list`}>
      <div className="card col-12 col-lg-6 ">
        <div className="card-body job-card">
          <h3>{job.title}</h3>
          <p>Company: {job.company}</p>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>{job.description}</p>
          <img src={job.img} alt='no' className="img-fluid job-img"/>
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
                  action={`https://formsubmit.co/dhatchanamoorthiapcse19@jkkmct.edu.in`} method="POST"
                  onSubmit={formsubmit}
              
                   >
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">FirstName</label>
                      <input type="text" class="form-control" id="recipient-name" name="First-name"
                      required />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Email ID</label>
                      <input class="form-control" id="message-text" type='email' name="email" required />
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
                      <input class="form-control" id="message-text" type='file' title="upload file smaller than 5MB" name="upload" />
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary">Send message</button>
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
                  <h3>{job.title}</h3>
                  <p>{job.Role}</p>
                  <ul>
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
