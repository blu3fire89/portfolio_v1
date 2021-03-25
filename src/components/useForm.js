import { useState, useEffect } from 'react';
import validate from './validateForm';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
    const [ errors, setErrors ] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [ isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        //console.log(Object.keys(errors).length)
        setErrors(validate(values));
    }, [canSubmit])

    const [ values, setValues ] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        setCanSubmit(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        } else {
            setCanSubmit(false);
        }
    }, [errors]);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        //send mail 
        if(canSubmit || Object.keys(errors).length === 0) {
            //console.log("sending")
            emailjs.sendForm('service_sod8lvd', 'template_zz0wj7n', e.target, 'user_YIEC41iJegPpfaPFEMe7b')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setIsSubmitted(true);
        }
        setShowErrors(true);
        setIsSubmitting(true);
    }

    return { handleChange, values, handleSubmit, errors ,showErrors, isSubmitted };
};

export default useForm;