import React from 'react'
import TitleComponent from '../components/TitleComponent'
import img1 from './../assets/service1.jpg'
import img2 from './../assets/service2.jpg'
import img3 from './../assets/service3.jpg'

const Services = () => {
  return (
    <div>
        <TitleComponent title="Services"></TitleComponent>
        <div class="container-fluid">
            <div class="row justify-content-evenly">
                <div class="col-md-3">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Development</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Testing</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Maintenance</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
            </div>

            <div class="row justify-content-evenly mt-5 mb-5">
                <div class="col-md-3">
                    <div class="card">
                        <img src={img1} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Development</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <img src={img2} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Testing</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
                <div class="col-md-3">
                    <div class="card">
                        <img src={img3} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                          <h5 class="card-title">Software Maintenance</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Read More</a>
                        </div>
                      </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Services