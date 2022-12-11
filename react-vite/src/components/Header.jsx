import React from 'react'
import img from '../assets/pexels-mont-photographs-2948636.jpg'
import './Header.css'

const Header = () => {
    window.onscroll = function () {
        let windowTextPos = window.scrollY;
        console.log(windowTextPos)

        if (windowTextPos < 200) {
            let thisHead = document.getElementById('thisHead');

            thisHead.style.transform = `translateY(-${windowTextPos}px)`;
        }
        else {
            null
        }
    }
    return (
        <div className='linearGradient'>
            <div className="classLinear"></div>
            <div className="headHolder" id='thisHead'>
                <h1 className='headHolder'>The Design You Can Fell In <br /> Love With.</h1>
            </div>
            <img src={img} />
        </div>
    )
}

export default Header