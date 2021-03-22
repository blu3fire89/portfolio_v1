import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '@material-ui/core/Modal';
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/SendEmail.css';


function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function SendEmail() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const[open, setOpen] = useState(false);
    const[subject, setSubject] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");


    function submitEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_sod8lvd', 'template_zz0wj7n', e.target, 'user_YIEC41iJegPpfaPFEMe7b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
    }
    
    return (
        <div className="sendEmail">
            <Modal
                open={open}
                onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <div className="sendEmail-header">
                        <form className="sendEmail-body" onSubmit={submitEmail}>
                        <h2 className="sendEmailHeader-text">Contact Us</h2>
                        <hr />
                        <Input
                            placeholder="subject"
                            type="text"
                            value={subject}
                            name="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Input
                            placeholder="name"
                            type="text"
                            value={name}
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            placeholder="email"
                            type="email"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            placeholder="message"
                            type="text"
                            value={message}
                            name="message"
                            multiline
                            rows={5}
                            rowsMax={5}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </Modal>

            
            <div className="openModal">
                <Button onClick={() => setOpen(true)}>Click me!</Button>
            </div>
        </div>
    )
}

export default SendEmail
