import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='container-fluid mt-5'>
        <div class="row justify-content-evenly bg-dark">
                    <div class="col-md-3 text-white">
                        <h5>Rohith Software</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sequi ducimus non aspernatur!
                        </p>
                    </div>
                    <div class="col-md-3 text-white">
                        <h5>Important Links</h5>
                        <p>
                            <Link to={"/"} href="index.html" class=" text-decoration-none text-white">Home</Link> <br />
                            <Link to={"/Services"} href="#" class=" text-decoration-none text-white">Services</Link> <br />
                            <Link to={"/AboutUs"} href="#" class=" text-decoration-none text-white">About Us</Link> <br />
                            <Link to={"/ContactUs"} href="#" class=" text-decoration-none text-white">Contact Us</Link> <br />
                        </p>
                    </div>
                    <div class="col-md-3 text-white">
                        <h5>Address</h5>
                        <p>
                            Rohith Software <br />
                            Attigupe Metro Station <br />
                            Vijayanagar 2nd Phase <br />
                            Bangalore -560023 <br />
                            <i class="bi bi-telephone-outbound"></i> : 080-234-567-123
                        </p>
                    </div>
                </div>

                <div class="row bg-primary">
                    <div class="col-12  d-flex justify-content-center" >
                        <p class="text-white pt-2">All Rights Reserved Rohith Software @2024</p>
                    </div>
                </div>     
    </div>
  )
}

export default Footer