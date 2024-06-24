import React, {useState, useRef} from 'react';
import {IoSend as SendIcon} from "react-icons/io5";
import emailjs from '@emailjs/browser';

import st from 'ryscott-st';

emailjs.init({publicKey: 'z6Yf3PnbSVCrJhq0t'});

const ContactForm = function() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = function(e) {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_uz4dqsm', form.current)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();

    setSent(true);
  };

  const renderForm = function() {
    return (
      <>
      <form ref={form} className='v' onSubmit={handleSubmit}>
        <input type='text' name='user_name' placeholder='Name?' required/>
        <input type='email' name='user_email' placeholder='Email?' required/>
        <textarea name='message' placeholder="What's up?" required/>
        <SendIcon size={28}/>
      </form>
      </>
    );
  };

  const renderSent = function() {
    return (
      <div className='sentBox c'>
        Message sent! You will receive a response shortly.
      </div>
    );
  };

  return (
    <>
    {!sent && renderForm()}
    {sent && renderSent()}
    </>
  );
};

export default ContactForm;