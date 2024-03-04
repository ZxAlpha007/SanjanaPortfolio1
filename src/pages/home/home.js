import React from 'react'
import "./home.css"
import { motion } from 'framer-motion'
import Icon from '../../elements/AB/icon'
import Aurora from '../../elements/aurora/aurora'
import Scroller from '../../elements/scroller/scroller'
import Floater from '../../elements/floaters/floater'

const Home = () => {
  return (
    <>
      <div className='slider'>
        <div className='sliderDiv1'>
          <div className='Icontainer'><Icon /></div>
          <Aurora Text="ARTIST BY HEART" />
          <Floater/>
        </div>
      </div>
      <Scroller/>
    </>
  )
}

export default Home