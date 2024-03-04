import React from 'react'


import "./footer.css"

const Footer = () => {

  const timestamp = new Date().getFullYear()

  return (
    <div className='footer'>
      <div className='footerDiv1'>
        <div className='icons'>
          <a href='#' target='_blank'><i className="fi fi-brands-instagram iconSize"></i></a>
          <a href='#' target='_blank'><i className="fi fi-brands-google iconSize"></i></a>
          <a href='#' target='_blank'><i className="fi fi-brands-facebook iconSize"></i></a>
          <a href='#' target='_blank'><i className="fi fi-brands-artstation iconSize"></i></a>
          <a href='#' target='_blank'><i className="fi fi-brands-linkedin iconSize"></i></a>
        </div>
        <div className='mark'>©️{timestamp} Handmade by Sanjana</div>
      </div>
    </div>
  )
}

export default Footer