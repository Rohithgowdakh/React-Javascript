import React from 'react'
import TitleComponent from '../components/TitleComponent'

const ContactUs = () => {
  return (
    <div>
      <TitleComponent title="Contact-Us"></TitleComponent>
      <div className="container-fluid">
        <div className="row justify-content-evenly mt-4" style={{ backgroundColor: '#f1f1f1' }}>

          <div className="col-md-5">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">Full Name</label>
                <input type="email" className="form-control" id="name" placeholder="Full Name"></input>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email Id"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Describe Youself"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Submit</button>
              <button type="reset" className="btn btn-success ms-3 mt-2">Reset</button>
            </form>
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
  )
}

export default ContactUs