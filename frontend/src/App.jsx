import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"

const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App