import React from 'react'
import img from '../assets/pexels-mont-photographs-2948636.jpg'
import './Header.css'

const Header = () => {
    window.onscroll = function () {
        let windowTextPos = window.scrollY;
        let opaqueEquation = windowTextPos / 10;
        // console.log("Out" + opaqueEquation)
        // console.log(windowTextPos)

        let thisBtn = document.getElementById('btnDown');
        if (windowTextPos < 300) {
            let thisHead = document.getElementById('thisHead');

            thisHead.style.transform = `translateY(-${windowTextPos}px)`;
            thisBtn.style.transform = `translateY(${windowTextPos}%)`;
        }

        if (opaqueEquation > 0) {
            console.log(-opaqueEquation)
            thisBtn.style.opacity = 15 + -opaqueEquation + "%";
        }
        else {
            thisBtn.style.opacity = '1';
            //1
        }
    }

    function windowScroll() {
        window.scrollTo({
            top: 505,
            behavior: 'smooth'
        })
    }
    return (
        <React.Fragment>
            <div className="fixedNav">
                <p>Bhavya Panchal .</p>
            </div>
            <div className='linearGradient'>
                <div className="classLinear"></div>
                <div className="headHolder" id='thisHead'>
                    <h1 className='headHolder'>The Design You Can Fell In <br /> Love With.</h1>
                </div>
                <img src={img} className="imgTag" />
                <div className="btn" id='btnDown'>
                    <button className='explore' onClick={windowScroll}>
                        <span className='btnSpan'>
                            EXPLORE MY PORTFOLIO
                        </span>
                    </button>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Header