import React from 'react';
import {IoLogoLinkedin as LinkedIn,
        IoLogoGithub   as GitHub,
        IoLogoInstagram as Insta} from 'react-icons/io';
import {MdEmail as Mail} from 'react-icons/md';

const ContactButtons = function() {
  return (
    <div className='contactButtons h'>
      <LinkedIn className='contactButton' size={40} onClick={()=>{window.open('https://www.linkedin.com/in/ryscott89/', '_blank')}}/>
      <GitHub   className='contactButton' size={38} onClick={()=>{window.open('https://github.com/ryananger', '_blank')}}/>
      <Mail     className='contactButton' size={40} onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&to=ryan.anger.314@gmail.com&tf=cm', '_blank')}}/>
      <Insta    className='contactButton' size={40} onClick={()=>{window.open('https://instagram.com/ink.vessels/', '_blank')}}/>
    </div>
  )
};

export default ContactButtons;