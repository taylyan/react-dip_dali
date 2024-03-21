import React from 'react';
import Picture from '../assets/security.jpg';
import '../css/Contact.css'

function Contact() {
  return (
    <div className='contact'>
    <div className='leftSide' style={{ backgroundImage: `url(${Picture})` }}>
    </div>
    <div className='rightSide'>
      <h1>Свържи се с нас</h1>
      <form id='contact-form' method='POST'>
        <label htmlFor='name'>Имена:</label>
        <input name='name' placeholder='Въведи имена...' type='text'/>
        <label htmlFor='email'>Имейл:</label>
        <input name='email' placeholder='Въведи имейл...' type='email'/>
        <label htmlFor='message'>Съобщение</label>
        <textarea rows="6" placeholder='Въведи съопщение.....' name='message' required> </textarea>
        <button type='submit'>Изпрати Съобщение</button>
      </form>
      </div>
  </div>
  );
}

export default Contact