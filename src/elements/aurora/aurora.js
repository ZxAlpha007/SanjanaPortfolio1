import React from 'react'
import "./aurora.css"
import PropTypes from 'prop-types'

const Aurora = (props) => {
    return (
        <>
            <div className="content">
                <h1 className="title">{props.Text}
                    <div className="aurora">
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                    </div>
                </h1>
            </div>
        </>
    )
}

Aurora.defaultProps = {
    Text:"Text Here",
}

Aurora.PropTypes = {
    Text: PropTypes.string,
}

export default Aurora