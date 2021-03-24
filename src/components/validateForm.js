export default function validateForm(values) {
    let errors ={}

    if(!values.subject.trim()) {
        errors.subject = "Subject required"
    }

    if(!values.name) {
        errors.name = "Name required"
    }

    if(!values.email) {
        errors.email = "Email required"
    } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if(!values.message.trim()) {
        errors.message = "Message required"
    } else if (values.message.length < 6) {
        errors.message = "Message needs to be 6 characters long or more"
    }

    return errors;
}

