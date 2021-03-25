import React, { useState} from 'react';
import '../styles/Contact.css';
import FormSubmit from './FormSubmit';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function Contact() {
    const [isSubmited, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <div className="contact">
            <div className="contact-header">
                <ArrowRightIcon />
                <h2 id="contact">CONTACT</h2>
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
                        <h2 className="github-link"><a href="https://github.com/blu3fire89?tab=repositories">github</a></h2>
                        <h2 className="linkedin-link"><a href="https://www.linkedin.com/in/brian-karl-sayen-06a7831a9">linkedin</a></h2>
                    </div>
                </div>
                <div className="contactBody-image">
                    <FormSubmit submitForm={submitForm} />
                </div>
            </div>
        </div>
    )
}

export default Contact
