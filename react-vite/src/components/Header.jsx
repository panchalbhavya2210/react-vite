import React from 'react'
import img from '../assets/pexels-mont-photographs-2948636.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='linearGradient'>
            <div className="classLinear"></div>
            <h1>The Design You Fell In <br /> Love With</h1>
            <img src={img} />
        </div>
    )
}

export default Header