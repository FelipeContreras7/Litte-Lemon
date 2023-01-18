import "./hero.css"

const Hero = () => (

<div class="hero-background">
  <div class="hero_title">Little Lemon</div>
  <div class="hero_description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
  <div class="hero_button_div"><button class="hero_button">book a table</button></div>
  <div class="hero_photo_container">
    <img src={require('../../images/img2.png')} alt="hero_photo" class="hero_photo"/>
  </div>
</div>

)

export default Hero;