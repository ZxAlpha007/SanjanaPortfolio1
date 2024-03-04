import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/home/home';
import About from '../../pages/about/about';
import Artwork from '../../pages/artwork/artwork';
import Achivements from '../../pages/achivements/achivements';
import Store from '../../pages/store/store';
import Contact from '../../pages/contact/contact';

const Body = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='artwork' element={<Artwork/>} />
        <Route path='achivements' element={<Achivements/>} />
        <Route path='store' element={<Store/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default Body