import "./hero.css"
import { Link } from "react-router-dom";

const Hero = () => (

<div className="hero-background">
  <div className="hero_title">Little Lemon</div>
  <div className="hero_description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</div>
  <div className="hero_button_div"><button className="hero_button"><Link className="hero_button_link" to="/abooking">book a table</Link></button></div>
  <div className="hero_photo_container">
    <img src={require('../../images/img2.png')} alt="hero_photo" className="hero_photo"/>
  </div>
</div>

)

export default Hero;