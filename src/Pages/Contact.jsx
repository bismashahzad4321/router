import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50 justify-center items-center text-center px-6 py-12">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-amber-900 mb-6">Contact Us</h1>
      
      {/* Contact Card */}
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-lg w-full text-center">
        <p className="text-gray-600 mb-6">
          Have any questions or want to work with us? 
          Feel free to reach out and we’ll get back to you as soon as possible.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-700 mb-6">
          <p><strong>Email:</strong> itssheikh@gmail.com</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Address:</strong> Lahore, Pakistan</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
