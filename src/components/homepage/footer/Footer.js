import React from 'react'
import './Footer.css'
import itb from '../../img/itb.png'

const Footer = () => {
    return (
        <footer>
            <div className="post-next-button">
                <a href='#'>Next Page <span>&#10095;&#10095;</span></a>
            </div>
            <div className='button-link'>
                <a href='#up'><i class="fa-solid fa-angle-up"></i></a>
            </div>
            <div className='footer'>
                <div className='logo-text'>
                    <img src={itb}></img>
                    <p><a href='#'>Institut Teknologi Bandung</a> &copy;2023. All rights</p>
                </div>
                <div className='fesbuk'>
                    <a href='https://www.facebook.com/PPTIKITB'>
                        <i class="fa-brands fa-facebook-f fa-xl" alt="Facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
