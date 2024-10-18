import React, { useState } from 'react'
import SearchBar from './SerachBar/SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInSuccess, signoutFailure, signoutStart } from '../redux/user/userSlice'
import axios from 'axios'
import { toast } from 'react-toastify'

const NavBar = ({userInfo}) => {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = () => {}

    const onClearSearch = () => {
      setSearchQuery("")
    }

    const onLogout = async () => {
      try {
        dispatch(signoutStart())

        const res = await axios.get("http://localhost:3000/api/auth/signout", {
          withCredentials: true,
        })

        if(res.data.success === false) {
          dispatch(signoutFailure(res.data.message))
          toast.error(res.data.message)
          return
        }

        toast.success(res.data.message)
        dispatch(signInSuccess())
        navigate("/login")
      } catch (error) {
        toast.error(error.message)
        dispatch(signoutFailure(error.message))
      }
    }
    
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to={"/"}>
      <h2 className="text-xl font-medium text-black">
        <span className="text-red-600 font-bold ">Burokkun</span>
        <span className="text-red-600">ōto</span>
      </h2>
      </Link>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch} />

      <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
    </div>
  )
}

export default NavBar