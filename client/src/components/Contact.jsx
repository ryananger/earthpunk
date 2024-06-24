import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import ContactForm from './ContactForm.jsx';

const Contact = function() {
  return (
    <div id={'contact'} className={'info texture v c'}>
      <div className='circle texture' onClick={()=>{st.setView(null)}}/>
      <h2>contact us</h2>
      <ContactForm/>
    </div>
  );
};

export default Contact;
