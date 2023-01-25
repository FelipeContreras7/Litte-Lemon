import "./testimonials.css"

const Testimonials = () => (

  <div className="testimonials">
      <div className="testimonials_header">
        <div className="testimonials_title">Testimonials</div>
      </div>
      <div className="testimonial_boxes">
        <div className="testimonial_box">
          <div className="rating">Rating</div>
          <div className="photo_container">
            <div className="testimonial_photo"><img src={require('../../images/profile1.png')} alt="testimonial_photo" className="testimonial_photo"/></div>
            <div className="testimonial_name">Name</div>
          </div>
          <div className="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div className="testimonial_box">
          <div className="rating">Rating</div>
          <div className="photo_container">
            <div className="testimonial_photo"><img src={require('../../images/profile2.png')} alt="testimonial_photo" className="testimonial_photo"/></div>
            <div className="testimonial_name">Name</div>
          </div>
          <div className="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div className="testimonial_box">
          <div className="rating">Rating</div>
          <div className="photo_container">
            <div className="testimonial_photo"><img src={require('../../images/profile3.png')} alt="testimonial_photo" className="testimonial_photo"/></div>
            <div className="testimonial_name">Name</div>
          </div>
          <div className="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div className="testimonial_box">
          <div className="rating">Rating</div>
          <div className="photo_container">
            <div className="testimonial_photo"><img src={require('../../images/profile4.png')} alt="testimonial_photo" className="testimonial_photo"/></div>
            <div className="testimonial_name">Name</div>
          </div>
          <div className="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
      </div>
    </div>
)

export default Testimonials;