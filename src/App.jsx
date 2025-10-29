import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainHome from './pages/home/MainHome'
import UserNavbar from './components/UserNavbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
<BrowserRouter>
<UserNavbar/>
  <Routes>
    <Route path='/' element={<MainHome/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
      
    </>
  )
}
