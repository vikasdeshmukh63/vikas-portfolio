import React from 'react'
import "../stylesheets/footer.css"

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div id='footer'>
            <h4 className='text-lg'>The best error message is the one that never shows up. - Thomas Fuchs</h4>
            <div className="icongroup text-lg">
                <div className='footer-icon'><a href="https://github.com/vikasdeshmukh63"><i className="fa-brands fa-github"></i></a></div>
                <div className='footer-icon'><a href="https://www.linkedin.com/in/vikas-deshmukh-fullstackdeveloper/"><i className="fa-brands fa-linkedin"></i></a></div>
                <div className='footer-icon'><a href="https://www.instagram.com/im_vikasdeshmukh/"><i className="fa-brands fa-instagram"></i></a></div>
            </div>
            <span>© {year} Designed and Developed by Vikas Deshmukh</span>
        </div>
    )
}

export default Footer
