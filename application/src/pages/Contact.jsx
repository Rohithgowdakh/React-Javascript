import React, { useState, useRef } from 'react';
import TitleComponent from '../components/TitleComponent';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage('');

    emailjs
      .sendForm('service_45', 'template_45', form.current, 'pmJHKrpCzb7bfDliZ')
      .then(
        () => {
          setFeedbackMessage('Message sent successfully!');
          handleCancel(); 
        },
        (error) => {
          setFeedbackMessage(`Failed to send: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div>
      <TitleComponent title="Contact Us Page" />
      <div className="container-fluid">
        <div className="row justify-content-evenly" style={{ backgroundColor: '#f1f1f1' }}>
          <div className="col-md-5">
            <h3 className='text-center'>Contact Form</h3>
            <form onSubmit={sendEmail} ref={form}>
              <div className='p-2'>
                <label htmlFor='fullname'>Full Name:</label>
                <input 
                  type='text' 
                  name='fullname' 
                  value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              <div className='p-2'>
                <label htmlFor='email'>Email:</label>
                <input 
                  type='email' 
                  name='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  placeholder="Enter your email"
                />
              </div>
              <div className='p-2'>
                <label htmlFor='phone'>Phone:</label>
                <input 
                  type='text' 
                  name='phone' 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="Enter your phone number"
                />
              </div>
              <div className='p-2'>
                <label htmlFor='message'>Message:</label>
                <textarea 
                  name='message' 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                  placeholder="Type your message"
                />
              </div>
              <div className='p-2'>
                <button 
                  type='submit' 
                  className='me-4 btn btn-primary' 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
                <button 
                  type='button' 
                  onClick={handleCancel} 
                  className='btn btn-danger'
                >
                  Cancel
                </button>
              </div>
            </form>
            {feedbackMessage && <div className="mt-3 alert alert-info">{feedbackMessage}</div>}
          </div>
          <div className="col-md-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
