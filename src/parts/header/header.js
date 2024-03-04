import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.Class}`} >
      <div className="header-container1">
        <div className="header-name">
          <Link to="/" className="header-navlink">
            <span>Sanjana Rathore</span>
            <br></br>
          </Link>
        </div>
        <div className="header-navbar">
          <Link to="/" className="header-navlink1">
            Home
          </Link>
          <Link to="artwork" className="header-navlink2">
            Artwork
          </Link>
          <Link to="achivements" className="header-navlink3">
            Achivements
          </Link>
          <Link to="store" className="header-navlink4">
            Store
          </Link>
          <Link to="about" className="header-navlink5">
            About me
          </Link>
          <Link to="contact" className="header-navlink6">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}
Header.defaultProps = {
  Class: '',
}

Header.propTypes = {
  Class: PropTypes.string,
}
export default Header
