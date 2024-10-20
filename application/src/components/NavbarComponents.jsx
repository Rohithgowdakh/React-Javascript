import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponents = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to={"/"} className="nav-link active" aria-current="page" href="#">HOME</Link>
        <Link to={"/Services"} className="nav-link" href="#">SERVICE</Link>
        <Link to={"/Contact"} className="nav-link" href="#">CONTACT</Link>
        <Link to={"/About"} className="nav-link" href="#">ABOUT</Link>
        <Link to={"/Courses"} className="nav-link" href="#">COURSES</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavbarComponents