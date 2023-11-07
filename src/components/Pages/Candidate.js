import React from 'react'

function Candidate() {

  const storedData = localStorage.getItem('userData');
  const data = JSON.parse(storedData);
  return (
    <div>
     <div className="candidate-page-head">
      <div className="card">
       <div className="card-body">
        <p>Name :  {data.name}</p>
        <p>Email :  {data.email}</p>
       </div>
      </div>
     </div>
    </div>
    
  )
}

export default Candidate