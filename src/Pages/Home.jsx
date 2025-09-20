import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col bg-amber-50 justify-center items-center text-center gap-2.5 '>
      <h1 className="text-4xl font-bold text-amber-700 mb-4">
        Welcome to My Website
      </h1>
      <p className='text-black-700 '>This is a simple Home page built with React & Tailwind CSS.</p>
      <button className='bg-amber-800 text-amber-50 p-2 m-1 '><Link to="contact-us" >Constact us</Link></button>
    
    </div>
  )
}

export default Home
