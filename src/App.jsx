import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import AddBlog from './components/AddBlog'
import Blogs from './components/Blogs'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {

  return (
    <>
    
      <Routes>
        <Route path={'/'} element={<Login />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/blogs'} element={<Main child={<Blogs />} />}/>
        <Route path={'/addblog'} element={<Main child={<AddBlog />} />}/>
      </Routes>
    </>
  )
}

export default App
