import "./specials.css"

const Specials = () => (

<div class="specials">
<div class="specials_header">
  <div class="specials_title">This week Specials!</div>
  <div class="specials_button_div"><button class="specials_button">online menu</button></div>
</div>
<div class="specials_dishes">
    <div class="dish">
      <div class="dish_photo"><img src={require('../../images/img4.png')} alt="hero_photo"/></div>
      <div class="dish_title">Dish number 1</div>
      <div class="dish_price">$10.00</div>
      <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div class="dish_button"><button class="add">add to cart</button></div>
    </div>
    <div class="dish">
      <div class="dish_photo"><img src={require('../../images/img3.png')} alt="hero_photo"/></div>
      <div class="dish_title">Dish number 2</div>
      <div class="dish_price">$10.00</div>
      <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div class="dish_button"><button class="add">add to cart</button></div>
    </div>
    <div class="dish">
      <div class="dish_photo"><img src={require('../../images/img5.png')} alt="hero_photo"/></div>
      <div class="dish_title">Dish number 3</div>
      <div class="dish_price">$10.00</div>
      <div class="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div class="dish_button"><button class="add">add to cart</button></div>
    </div>
  </div>
</div>
)

export default Specials;