import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import axios from 'axios'
import { toast } from 'react-toastify'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()

    if(!name) {
      setError("Please enter your name")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if(!password) {
      setError("Please enter the password")
      return
    }

    

    // Sign Up Api

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {username: name, email, password},
        { withCrededentials: true}
      )

      if(res.data.success === false){
        setError(res.data.message)
        toast.error(res.data.message)
        return
      }

      toast.success(res.data.message)

      setError("")
      
      navigate("/login")
    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
      setError(error.message)
    }

  }


  return (
    <div className="flex items-center justify-center  h-screen">
      <div className="w-96 h-96 rounded-full bg-red-600 flex items-center justify-center p-7 ">
        <form onSubmit={handleSignUp} className="w-full text-center">
          <h4 className="text-2xl mb-7 text-black">サインアップ</h4>
          <input 
            type="text" 
            placeholder="名前" 
            className="w-full bg-red-600 mb-4 px-4 py-2 text-sm text-white rounded-lg focus:outline-none" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="電子メール" 
            className="w-full bg-red-600 mb-4 px-4 py-2 text-sm text-white rounded-lg focus:outline-none" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 

          />
          <PasswordInput value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-700 text-sm pb-1">{error}</p>}

          <button type="submit" className="w-full bg-red-600 text-red-600 font-semibold py-2 rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            サインアップ
          </button>
          <p className="text-sm mt-4 text-white">
          すでにアカウントをお持ちですか?{" "}<br></br>
            <Link to={"/login"} className="font-medium text-[#2B8] underline">
            アカウントにログインしてください</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup