import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import Html from '../Pages/SubServicesPages/Html'
import Javascript from '../Pages/SubServicesPages/Javascript'
import Css from '../Pages/SubServicesPages/Css'
import Navbar from '../Navbar/navbar'

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                    <Route path='/services/html' element={<Html />} />
                    <Route path='/services/css' element={<Css />} />
                    <Route path='/services/javascript' element={<Javascript />} />
                {/* </Route> */}
                <Route path='/contact-us' element={<Contact />} />
                <Route path='*'   />

            </Routes>

        </div>
    )
}

export default AppRouter