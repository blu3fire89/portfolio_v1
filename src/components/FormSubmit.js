import useForm from './useForm';
import { Button, TextField } from '@material-ui/core';
import React from 'react';
import validate from './validateForm';
import '../styles/FormSubmit.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function FormSubmit({submitForm}) {
    const { handleChange, values, handleSubmit, errors, showErrors, isSubmitted } = useForm(submitForm, validate);
    return (
        <React.Fragment>
            {!isSubmitted ? ( 
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
                        <div className="form-error">{showErrors && <p>{errors.subject}</p>}</div>
                        <TextField 
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <div className="form-error">{showErrors && <p>{errors.name}</p>}</div>
                        <TextField 
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <div className="form-error">{showErrors && <p>{errors.email}</p>}</div>
                        <TextField 
                            id="message"
                            name="message"
                            label="Message"
                            type="text"
                            value={values.message}
                            onChange={handleChange}
                        />
                        <div className="form-error">{showErrors && <p>{errors.message}</p>}</div>
                    </div>
                    <Button className="formSubmit-button" type="submit">Send</Button>
                    
                </form>  
            </div>
            ): (
            <div className="form-submitted">
                <CheckCircleIcon />
                <h1>Message Sent!</h1>
            </div>
            )}
        </React.Fragment>
        
        
    )
}

export default FormSubmit
