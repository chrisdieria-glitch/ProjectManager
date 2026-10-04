import { useState } from 'react'
import './index.css'
import MainScreen from './screens/MainScreen/MainScreen.jsx'
import Login from './screens/Login/Login.jsx'
import NewUW from './screens/NewUserWelcome/NewUW.jsx'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/newuser" element={<NewUW/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<MainScreen />} />
    </Routes>
  )
}

export default App
