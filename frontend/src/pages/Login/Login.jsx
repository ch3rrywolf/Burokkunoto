import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  return (
    <div className="">
      <div>
        <form>
          <h4 className="text-2xl mb-7">Login</h4>
          <input 
            type="text" 
            placeholder="Email" 
            className="input-box" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <PasswordInput />
        </form>
      </div>
    </div>
  )
}

export default Login