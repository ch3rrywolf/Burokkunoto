import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

const AddEditNotes = ({ onClose }) => {
    const [title, setTitle] = useState("")
  return (
    <div className="relative">
        <button
        className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3
        -right-3 hover:bg-slate-50"
        onClick={onClose}
        >
            <MdClose className="text-xl text-slate-400" />
        </button>
        <div>
            <label className="input-label text-red-400 uppercase">Title</label>

            <input
                type="text"
                className="text-2xl text-slate-950 outline-none"
                placeholder="test test"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
             />
        </div>

    </div>
  )
}

export default AddEditNotes