import React, { useState } from 'react';
import './form.css';
import FormSignin from './FormSignin';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='assets/img/icon/login.svg' alt='' />
        </div>
        <FormSignin/>
      </div>
    </>
  );
};

export default Form;
