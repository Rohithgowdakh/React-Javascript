import React from 'react'
import TitleComponent from '../components/TitleComponent'
import img1 from '../assets/staff.jpg'

const AboutUs = () => {
  return (
    <div>
        <TitleComponent title="About-Us"></TitleComponent>
        <div class="container-fluid">
            <div class="row justify-content-evenly">
                <div class="col-md-5 pt-5">
                    <img src={img1} class="img-fluid"></img>
                </div>
                <div class="col-md-5 pt-5">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, magnam labore quas aliquid odit natus rerum in esse temporibus molestiae sint eius? Minus obcaecati magni et beatae id corporis rerum.
                    Dolorum impedit, molestias veniam ut iure blanditiis dicta officiis laboriosam dolores. Maiores fugit vero nostrum unde dolores voluptate ipsam necessitatibus commodi, blanditiis, doloribus delectus, deserunt sequi iure ea repellat deleniti.
                    Sit perspiciatis, eos odio doloremque tenetur corporis illo, illum blanditiis, saepe corrupti repellat? Repellat culpa consequatur vitae iste sed ad delectus illum consequuntur optio! Veniam animi incidunt repellat dolorem quaerat.
                    Perferendis cumque facilis beatae voluptas, temporibus eligendi eius repudiandae error expedita quaerat necessitatibus culpa deleniti ratione mollitia incidunt! Illum quaerat natus officia quod magnam incidunt totam eveniet ipsa consequatur eius.</p>
                    <a href="#" class="btn btn-outline-danger">Explore Now</a>
                </div>
            </div>
            </div>
    </div>
  )
}

export default AboutUs