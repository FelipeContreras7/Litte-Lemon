import "./testimonials.css"

const Testimonials = () => (

  <div class="testimonials">
      <div class="testimonials_header">
        <div class="testimonials_title">Testimonials</div>
      </div>
      <div class="testimonial_boxes">
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../images/profile1.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../images/profile2.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../images/profile3.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../images/profile4.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
      </div>
    </div>
)

export default Testimonials;