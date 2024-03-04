import React from 'react'
import "./acard.css"
import propTypes from 'prop-types'

const Acard = (props) => {

    return (
        <>
            <div className='achi' key={props.key}>
                <div className='image'>
                    <img className='img' src={props.imager} alt='' />
                    <h2 className='text'>{props.textr}</h2>
                </div>
            </div>
        </>
    )
}

Acard.defaultProps = {
    imager: "https://images.pexels.com/photos/16117986/pexels-photo-16117986.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    textr: "some text",
    key: "",
}

Acard.propTypes = {
    imager: propTypes.string,
    textr: propTypes.string,
    key: propTypes.string,
}

export default Acard