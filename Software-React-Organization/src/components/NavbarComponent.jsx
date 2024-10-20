import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
const NavbarComponent = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold" href="#">Rohith Soltions</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active text-white" aria-current="page" href="#">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to={"/Services"} className="nav-link text-white" href="#">SERVICE</Link>
        </li>
        <li className="nav-item">
          <Link to={"/AboutUs"} className="nav-link text-white" href="#">ABOUT-US</Link>
        </li>
        <li className="nav-item">
          <Link to={"/ContactUs"} className="nav-link text-white" href="#">CONTACT-US</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarComponent