import { Route, Routes } from "react-router-dom"
import React from 'react'
import Body from './componants/Body'
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Body />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
