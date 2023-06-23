import React from 'react'
import "../stylesheets/contact.css"

const ContactMe = React.forwardRef((props, ref) => {
    return (
        <div id="contact" ref={ref}>
            <div className="inner-contact">
                <h1 className='text-3xl'>Contact Me</h1>
                <div className="contact-container">
                    <div className="contact-card">
                        <i className="ri-phone-line icon"></i>
                        <h4 className='text-xl'>Phone</h4>
                        <p className='text-md'>Let's have a call</p>
                        <h6 className='text-lg'><a href="tel:7972131927">7972131927</a></h6>
                    </div>
                    <div className="contact-card">
                        <i className="ri-mail-line icon"></i>
                        <h4 className='text-xl'>Email</h4>
                        <p className='text-md'>Drop me a line</p>
                        <h6><a href="mailto:vikasdeshmukh63@gmail.com">vikasdeshmukh63@gmail.com</a></h6>
                    </div>
                    <div className="contact-card">
                        <i className="ri-map-pin-line icon"></i>
                        <h4 className='text-xl'>Location</h4>
                        <p className='text-md'>Amravati,Maharashtra</p>
                        <h6><a href="https://goo.gl/maps/J41QTn2mD7jVyHYTA" target="_blank" rel="noopener noreferrer">View on Google Maps</a></h6>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ContactMe
