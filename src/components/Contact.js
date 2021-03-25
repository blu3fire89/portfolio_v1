import React from 'react';
import '../styles/Contact.css';
import FormSubmit from './FormSubmit';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-header">
                <ArrowRightIcon />
                <h2>CONTACT</h2>
            </div>
            <div className="contact-body">
                <div className="contactBody-text">
                    <h2>Say hi!</h2>
                    <h1 className="contactBody-intro">
                        <span>Hi I'm Brian Sayen,</span>
                        <span>a web developer </span>
                        <span>based in the Philippines</span> 
                    </h1>
                    <p>you can drop me a message at <span>briankarl.sayen@gmail.com</span></p>
                    <div className="contactBody-links">
                        <h2 className="instagram-link">instagram</h2>
                        <h2 className="linkedin-link">linkedin</h2>
                    </div>
                </div>
                <div className="contactBody-image">
                    <FormSubmit />
                </div>
            </div>
        </div>
    )
}

export default Contact
