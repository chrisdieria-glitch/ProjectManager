import { useState } from 'react'
import './index.css'
import MainScreen from './screens/MainScreen/MainScreen.jsx'
import Signin from './screens/Login/Signin.jsx'
import Login from './screens/Login/Login.jsx'
import NewUW from './screens/NewUserWelcome/NewUW.jsx'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/newuser" element={<NewUW/>}/>
      <Route path="/" element={<Signin/>}/>
      <Route path="/main" element={<MainScreen />} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default App
