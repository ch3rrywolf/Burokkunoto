import React, { useEffect, useState } from 'react'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'
import Modal from 'react-modal'
import AddEditNotes from './AddEditNotes'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavBar from "../../components/NavBar"

const Home = () => {
  const { currentUser, loading, errorDispatch } = useSelector(
    (state) => state.user
  )

  const [userInfo, setUserInfo] = useState(null)

  const navigate = useNavigate()

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })

  useEffect(() => {
    if (currentUser === null || !currentUser) {
      navigate("/login")
    } else {
      setUserInfo(currentUser?.rest)
    }
  }, [])
  return (
    
    <>
    <NavBar userInfo={userInfo}/>
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8
      max-md:m-5">
        <NoteCard
          title={"FirstNote"}
          date={"17 oct, 2024"}
          content={"hey you!"}
          tags={"#test"}
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
        <NoteCard
          title={"SecNote"}
          date={"17 oct, 2024"}
          content={"hey you!!"}
          tags={"#test"}
          isPinned={false}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </div>

    <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-600 
    hover:bg-blue-100 absolute right-10 bottom-10" 
    onClick={() =>{
      setOpenAddEditModal({ isShown: true, type: "add", data: null })
    }}
    >
      <MdAdd className="text-[32px] text-white" />

    </button>
    <Modal
      isOpen={openAddEditModal.isShown}
      onRequestClose={() => {}}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0,2)",
        },
      }}
      contentLabel=""
      className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-md
      mx-auto mt-14 p-5 overflow-scroll"
    >
      <AddEditNotes
        onClose={() =>
          setOpenAddEditModal({ isShown: false, type: "add", data: null })
        }
        noteData={openAddEditModal.data}
        type={openAddEditModal.type} 
      />
    </Modal>
    </>
  )
}

export default Home