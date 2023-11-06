import React from 'react'
import { useParams } from 'react-router-dom';

function Candidate() {
 const { inputData } = useParams();
  return (
    <div>

     <div className="candidate-page-head">
      <div className="card">
       <div className="card-body">

        <p>name:{}</p>
        <p>email:{inputData}</p>
       </div>
      </div>
     </div>



    </div>
  )
}

export default Candidate