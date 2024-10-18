import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import { useDispatch } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../../redux/user/userSlice'
import axios from "axios"
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if(!password) {
      setError("Please enter the password")
      return
    }

    setError("")

    // Login API call
    try {
      dispatch(signInStart())

      const res = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {email, password},
        {withCredentials: true}
      )

      if (res.data.success === false) {
        toast.error(res.data.message)
        console.log(res.data);
        dispatch(signInFailure(res.data.message))
        return
      }

      toast.success(res.data.message)
      dispatch(signInSuccess(res.data))
      navigate("/")

    } catch (error) {
      console.log(error)
      toast.error(error.message)
      dispatch(signInFailure(error.message))
    }
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      {/* Circular form container */}
      <div className="w-96 h-96 rounded-full bg-red-600 flex items-center justify-center p-7">
        <form onSubmit={handleLogin} className="w-full text-center">
          <h2 className="text-2xl mb-7 text-black">ログイン</h2>
          <input 
            type="text" 
            placeholder="電子メール" 
            className="w-full bg-red-600 mb-4 px-4 py-2 text-sm text-white rounded-lg focus:outline-none "
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <PasswordInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-white text-sm pb-1">{error}</p>}

          <button type="submit" className="w-full bg-red-600 text-red-600 font-semibold py-2 rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
          ログイン
          </button>
          <p className="text-sm mt-4 text-white">
          まだ登録されていません ?{" "}
            <Link to={"/signup"} className="font-medium text-[#2B8] underline">
            アカウントを作成する
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
