import React from 'react';
import useForm from './useForm';
import validate from './validateForm';

function FormSend() {

    const { handleChange, values, handleSubmit, errors } = useForm(validate);
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Leave a Message</h1>
                <div className="form-inputs">
                    <div className="form-input">
                        <input id="subject"
                            type="text"
                            name="subject"
                            className="form-input"
                            placeholder="subject"
                            value={values.subject}
                            onChange={handleChange}
                        />
                        <div className="form-error">{errors.subject && <p>{errors.subject}</p>}</div>
                    </div>
                    
                    <div className="form-input">
                        <input id="name"
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        <div className="form-error">{errors.name && <p>{errors.name}</p>}</div>
                    </div>
                    <div className="form-input">
                        <input id="email"
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        <div className="form-error">{errors.email && <p>{errors.email}</p>}</div>
                    </div>
                    <div className="form-input">
                        <textarea id="message"
                            type="text"
                            name="message"
                            className="form-input"
                            placeholder="message"
                            value={values.message}
                            onChange={handleChange}
                        ></textarea>
                        <div className="form-error">{errors.message && <p>{errors.message}</p>}</div>
                    </div>
                    
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}

export default FormSend
