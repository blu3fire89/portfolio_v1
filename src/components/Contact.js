import React from 'react';
import SendEmail from './SendEmail';
import FormSend from './FormSend';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-header">
                <h2>CONTACT</h2>
            </div>
            <div className="contact-body">
                <div className="contactBody-text">
                    <h2>Say hi!</h2>
                    <p>you can drop me a message at <span>briankarl.sayen@gmail.com</span></p>
                    <div className="contactBody-links">
                        <h2 className="instagram-link">intagram</h2>
                        <h2 className="linkedin-link">linkedin</h2>
                    </div>
                </div>
                <div className="contactBody-image">
                    <FormSend />
                </div>
            </div>
        </div>
    )
}

export default Contact
