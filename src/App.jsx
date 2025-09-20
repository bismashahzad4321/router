import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/app-router'
import Button from './Button/Button'
import Footer from './Footer/Footer'
function App() {

  return (
    <>
    <BrowserRouter>
    <AppRouter/>
   
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
