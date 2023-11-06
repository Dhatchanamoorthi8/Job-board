import React from 'react'
import './main.css'
import {useState} from 'react'
import Swal from 'sweetalert2'
const LoginPage = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');;
  

  const handleLogin = (e) =>{
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
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
        title: "login in successfully"
      })

    } else {
      alert('Invalid username or password');
    }
  }




 return (

  <div className='head'>
   <div className="login input-group">
    <form action="" className='form bg-body-secondary col-lg-4 col-10 p-5 rounded rounded-3'>
     <label htmlFor="UserName"class="form-label">UserName</label>
    
     <input type='text' class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required/>
       <br />
     <label htmlFor="Password"class="form-label">Password</label>
      <input type="password" class="form-control shadow-none" value={password} onChange={(e) => setPassword(e.target.value)} required/>

    <button type='submit' className='btn btn-primary col-12 mt-5' onClick={handleLogin}>Login</button>

    </form>
   </div>

  </div>
 )
}

export default LoginPage
