import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
  return (
    <div className='container'>
        <h1>Login</h1>
      <input type='text' onChange={(e)=>setUsername(e.target.value)} className='userName-field' placeholder='Username'/><br/><br/>
      <Link to={`/${username}`} className='login-btn'>Login</Link>
    </div>
  )
}

export default Login
