import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-6 py-12">
      

      <h1 className="text-4xl font-bold text-amber-700 mb-6">
        About Us
      </h1>
      
 
      <div className="max-w-2xl bg-white shadow-md rounded-2xl p-6 text-center">
        <p className="text-gray-600 text-lg mb-4">
          Welcome to our website! We are passionate about creating clean,
          modern, and user-friendly web experiences using the latest
          technologies like React and Tailwind CSS.
        </p>


        <Link 
          to="/contact-us" 
          className="inline-block bg-amber-800 text-amber-50 px-4 py-2 rounded-lg hover:bg-amber-700 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  )
}

export default About
