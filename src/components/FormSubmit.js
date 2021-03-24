import useForm from './useForm';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import validate from './validateForm';
import '../styles/FormSubmit.css';

function FormSubmit() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return (
        <div className="form">
            <div className="form-header">
                <h1>Send a Message</h1>
            </div>
            <form className="form-submit" onSubmit={handleSubmit}>
                <div className="formSubmit-input">
                    <TextField 
                        label="Subject"
                        id="subject"
                        name="subject"
                        type="text"
                        value={values.subject}
                        onChange={handleChange}
                    />
                    <TextField 
                        label="Name"
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="message"
                        name="message"
                        label="Message"
                        type="text"
                        value={values.message}
                        onChange={handleChange}
                    />
                </div>
                <Button className="formSubmit-button">Send</Button>
                
            </form>  
        </div>
        
    )
}

export default FormSubmit
