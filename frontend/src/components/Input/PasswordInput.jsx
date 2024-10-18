import React, { useState} from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className="flex items-center bg-transparent px-4 rounded mb-3 focus:outline-none ">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "パスワード"}
        className="w-full text-white text-sm bg-transparent py-2 mr-3 rounded-lg focus:outline-none"
      />

      {isShowPassword ? (
        <FaRegEye size={22} className="text-white cursor-pointer" onClick={() => toggleShowPassword()} />
      ) : (
        <FaRegEyeSlash size={22} className="text-slate-400 cursor-pointer" onClick={() => toggleShowPassword()} />
      
      )}
    </div>
  )
}

export default PasswordInput