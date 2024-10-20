import React from 'react'
import img1 from './../assets/bnr15.jpg'
import img2 from './../assets/user1.jpg'
import img3 from './../assets/growth.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HomeContent = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="first image"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="second image"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="Third image"></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container-fluid pt-3'>
                <div className="row">
                    <p className='fs-1 fw-light text-center'>Software development is the act of examining the<br />
                        artifacts and the behavior of the software.</p>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="row justify-content-evenly pt-4">
                    <div className="col-md-3 text-center">
                        <h1><i className="bi bi-file-code-fill text-primary"></i></h1>
                        <h5>Our Vision</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni
                            consectetur architecto quasi.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <h1><i className="bi bi-bookmarks-fill text-danger"></i></h1>
                        <h5>Our Mission</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni
                            consectetur architecto quasi.</p>
                    </div>
                    <div className="col-md-3 text-center">
                        <h1><i className="bi bi-calendar-range-fill text-success"></i></h1>
                        <h5>Our Aims</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ut quam officia, libero magni
                            consectetur architecto quasi.</p>
                    </div>
                </div>
            </div>
            { /*-----------------------------*/}
            <div className="container-fluid">
                <div className="row justify-content-evenly pt-4">
                    <h2 className='text-center'>Our Team Members</h2>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Manu</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Rohith</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Sai</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Abhi</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Vijay</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3  mt-3 mx-2">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Kiran</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, fugit?</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-evenly pt-4">
                    <h2 className='text-center'>Our Organization Growth</h2>
                    <div className="col-md-5 mt-3">
                        <img src={img3} className='img-fluid'></img>
                    </div>
                    <div className="col-md-5 mt-3">
                        <h5 className='mt-4'>MySql Development</h5>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                        <h5 className='mt-4'>Springboot Development</h5>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>
                        <h5 className='mt-4'>CSS Development</h5>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                        </div>
                        <h5 className='mt-4'>Javascript Development</h5>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                        </div>
                        <h5 className='mt-4'>React Development</h5>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      
    )
}

export default HomeContent