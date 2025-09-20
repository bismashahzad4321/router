import React from 'react'
import { Link } from 'react-router-dom'
const Html = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 px-6">
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-md w-full text-center">
        

        <h2 className="text-2xl font-bold text-amber-800 mb-4">
          HTML Basics
        </h2>
        

        <p className="text-gray-600 mb-4">
          HTML (HyperText Markup Language) is the standard language for
          creating web pages. It defines the structure of a webpage using
          elements like headings, paragraphs, links, and images.
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

export default Html
