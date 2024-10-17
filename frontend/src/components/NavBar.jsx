import React, { useState } from 'react'
import SearchBar from './SerachBar/SearchBar'
import ProfileInfo from './Cards/ProfileInfo'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const NavBar = ({userInfo}) => {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const handleSearch = () => {}
    const onClearSearch = () => {
      setSearchQuery("")
    }

    const onLogout = () => {
      navigate("/login")

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