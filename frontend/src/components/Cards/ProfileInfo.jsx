import React from 'react'

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-yellow-100">
        {" "}
        CW{" "}
      </div>

      <div>
        <p className="text-sm font-medium">Ch3rry</p>
      </div>

      <button className="text-sm bg-red-200 p-1 rounded-md text-white hover:opacity-80" onClick={onLogout}>Logout
      </button>
    </div>
  )
}

export default ProfileInfo