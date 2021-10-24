import PropTypes from 'prop-types';
import React from 'react'


const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log('click')
    }

    return (
        <button onClick={onClick} style={{backgroundColor: color }} className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button