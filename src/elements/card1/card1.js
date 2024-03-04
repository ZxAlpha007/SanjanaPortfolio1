import React from 'react'
import "./card1.css"
import PropTypes from 'prop-types'

const Card1 = (props) => {


  return (
    <div className="component-container">
      <div className="component-container1">
        <div className="component-container2"><img className='imagerx' src={props.url} />
          <div className="component-container3"></div>
        </div>
      </div>
      <span>{props.text}</span>
    </div>
  )
}

Card1.defaultProps = {
  text: 'Text',
  url: "https://images.pexels.com/photos/15272226/pexels-photo-15272226/free-photo-of-black-and-white-photo-of-a-woman-walking-down-the-street-in-misty-weather.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
}

Card1.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
}

export default Card1