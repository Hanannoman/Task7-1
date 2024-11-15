import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'


function App() {
  

  return (
    <>

    
    
    
     <Routes>
      <Route path='/' element={ <About/>} />
      <Route path='/home' element={ <Home/>} />
      <Route path='/contact' element={<Contact />} />
    </Routes> 
    </>
  )
}

export default App
