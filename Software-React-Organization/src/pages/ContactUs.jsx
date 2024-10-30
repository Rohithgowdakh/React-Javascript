import React, { useRef, useState } from 'react'
import TitleComponent from '../components/TitleComponent'
import emailjs from '@emailjs/browser';
const ContactUs = () => {
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
          <div className="col-md-5">
            <h5>Address</h5>
            <p>
              Rohith Software <br />
              Attigupe Metro Station <br />
              Vijayanagar 2nd Pahse <br />
              Bangalore -560023 <br />
              <i className="bi bi-telephone-outbound"></i> : 080-234-567-123
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1579170934333!2d77.53079380869772!3d12.961744987299944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0777fcdb13%3A0xe29d677232e1a97f!2sAttiguppe%20Metro%20Entrance(%20towards%20Chandra%20Layout)!5e0!3m2!1sen!2sin!4v1724385362936!5m2!1sen!2sin"
              style={{ width: '100%', height: '250px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs