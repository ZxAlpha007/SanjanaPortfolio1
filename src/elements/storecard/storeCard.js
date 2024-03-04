import React from 'react'
import "./storecard.css"
import PropTypes from 'prop-types'


const StoreCard = (props) => {
  return (
    <div className='cardbody'>
        <div className='imager'>
            <img className='imagerr' src={props.url}/>
        </div>
        <div className='texterr'>
            <h3>Name : {props.name}</h3>
            <h3>Price : {props.price}$</h3>
        </div>
    </div>
  )
}

StoreCard.defaultProps = {
  name : 'name',
  price : 5,
  url : 'https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
}

StoreCard.PropTypes = {
  name : PropTypes.string,
  price : PropTypes.number,
  url : PropTypes.string,
}

export default StoreCard