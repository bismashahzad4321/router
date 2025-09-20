import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div className="min-h-screen bg-amber-50 px-6 py-12">
      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-amber-700 mb-3">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide modern web development solutions using the latest 
          technologies like HTML, CSS, and JavaScript. Select a service below 
          to learn more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link 
          to="html" 
          className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-amber-700 mb-2">HTML</h2>
          <p className="text-gray-600 text-sm">
            Structure the web with semantic and clean HTML.
          </p>
        </Link>

        <Link 
          to="css" 
          className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-amber-700 mb-2">CSS</h2>
          <p className="text-gray-600 text-sm">
            Style websites with modern and responsive CSS techniques.
          </p>
        </Link>

        <Link 
          to="javascript" 
          className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-amber-700 mb-2">JavaScript</h2>
          <p className="text-gray-600 text-sm">
            Add interactivity and dynamic behavior with JavaScript.
          </p>
        </Link>
      </div>

      
        {/* <Outlet /> */}
     
    </div>
  )
}

export default Services
