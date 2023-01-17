import "./main.css";
import "./specials.css";
import "./testimonials.css";
import "./about.css";
import "./footer.css";
const Main = () => (
  <main>


    <div class="hero-background">
      <div class="hero_title">Little Lemon</div>
      <div class="hero_description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
      <div class="hero_button_div"><button class="hero_button">book a table</button></div>
      <div class="hero_photo_container"><img src={require('../../imagenes/img2.png')} alt="hero_photo" class="hero_photo"/></div>
    </div>


    <div class="specials">
        <div class="specials_header">
          <div class="specials_title">This week Specials!</div>
          <div class="specials_button_div"><button class="specials_button">online menu</button></div>
        </div>
        <div class="specials_dishes">
            <div class="dish">
              <div class="dish_photo"><img src={require('../../imagenes/img4.png')} alt="hero_photo"/></div>
              <div class="dish_title">Dish number 1</div>
              <div class="dish_price">$10.00</div>
              <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
              <div class="dish_button"><button class="add">add to cart</button></div>
            </div>
            <div class="dish">
              <div class="dish_photo"><img src={require('../../imagenes/img3.png')} alt="hero_photo"/></div>
              <div class="dish_title">Dish number 2</div>
              <div class="dish_price">$10.00</div>
              <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
              <div class="dish_button"><button class="add">add to cart</button></div>
            </div>
            <div class="dish">
              <div class="dish_photo"><img src={require('../../imagenes/img5.png')} alt="hero_photo"/></div>
              <div class="dish_title">Dish number 3</div>
              <div class="dish_price">$10.00</div>
              <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
              <div class="dish_button"><button class="add">add to cart</button></div>
            </div>
          </div>
    </div>

    <div class="testimonials">
      <div class="testimonials_header">
        <div class="testimonials_title">Testimonials</div>
      </div>
      <div class="testimonial_boxes">
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../imagenes/profile1.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../imagenes/profile2.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../imagenes/profile3.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
        <div class="testimonial_box">
          <div class="rating">Rating</div>
          <div class="photo_container">
            <div class="testimonial_photo"><img src={require('../../imagenes/profile4.png')} alt="testimonial_photo" class="testimonial_photo"/></div>
            <div class="testimonial_name">Name</div>
          </div>
          <div class="testimonial_descr">Descripition of the testimonial of the person</div>
        </div>
      </div>
    </div>

    <div class="about">
        <div class="about_title">Little Lemon</div>
        <div class="about_owners">Owners</div>
        <div class="about_description">description asjhdoaisdh asidjhasiudadso hashdo as d asd asd </div>
      <div class="about_img">
        <div class="container_photo">
          <img src={require('../../imagenes/owner1.png')} alt="hero_photo" class="img1"/>
          <img src={require('../../imagenes/owner2.png')} alt="hero_photo" class="img2"/>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer_nav1">
        <p class="footer_p">NAV TITLE</p>
        <ul class="footer_ul">
          <li class="footer_li"><a href="#">option 1</a></li>
          <li class="footer_li"><a href="#">option 2</a></li>
          <li class="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div class="footer_nav2">
        <p class="footer_p">NAV TITLE</p>
        <ul class="footer_ul">
          <li class="footer_li"><a href="#">option 1</a></li>
          <li class="footer_li"><a href="#">option 2</a></li>
          <li class="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div class="footer_nav3">
        <p class="footer_p">NAV TITLE</p>
        <ul class="footer_ul">
          <li class="footer_li"><a href="#">option 1</a></li>
          <li class="footer_li"><a href="#">option 2</a></li>
          <li class="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div class="footer_img">
        <img src={require('../../imagenes/logovertical.png')} alt="footer_photo" class="footer_img1"/>
      </div>
    </div>
  </main>
)

export default Main;