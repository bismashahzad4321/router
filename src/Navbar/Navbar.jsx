import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-amber-50 shadow-md w-full">
      <div className="flex justify-between items-center py-4 px-6">

        <div className="text-2xl font-bold text-amber-700">
          <Link to="/">Logo</Link>
        </div>

        <div className="flex items-center space-x-6">

          <Link to="/" className="text-gray-700 hover:text-amber-600 transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-amber-600 transition">About</Link>

    
          <div className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link to="/services" className="text-gray-700 hover:text-amber-600 transition  ">
              Services ▾
            </Link>

            {open && (
              <div className="absolute left-0 mt-0 w-40 bg-white shadow-md rounded border">
                <Link
                  to="/services/html"
                  className="block px-4 py-2 text-gray-700 hover:bg-amber-50"
                >
                  Html
                </Link>
                <Link
                  to="/services/css"
                  className="block px-4 py-2 text-gray-700 hover:bg-amber-50"
                >
                  Css
                </Link>
                <Link
                  to="/services/javascript"
                  className="block px-4 py-2 text-gray-700 hover:bg-amber-50"
                >
                  Javascript
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact-us" className="text-gray-700 hover:text-amber-600 transition">Contact Us</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar
