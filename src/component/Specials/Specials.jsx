import "./specials.css"

const Specials = () => (

<div className="specials">
<div className="specials_header">
  <div className="specials_title">This week Specials!</div>
  <div className="specials_button_div"><button className="specials_button">online menu</button></div>
</div>
<div className="specials_dishes">
    <div className="dish">
      <div className="dish_photo"><img src={require('../../images/img4.png')} alt="hero_photo"/></div>
      <div className="dish_title">Dish number 1</div>
      <div className="dish_price">$10.00</div>
      <div className="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div className="dish_button"><button className="add">add to cart</button></div>
    </div>
    <div className="dish">
      <div className="dish_photo"><img src={require('../../images/img3.png')} alt="hero_photo"/></div>
      <div className="dish_title">Dish number 2</div>
      <div className="dish_price">$10.00</div>
      <div className="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div className="dish_button"><button className="add">add to cart</button></div>
    </div>
    <div className="dish">
      <div className="dish_photo"><img src={require('../../images/img5.png')} alt="hero_photo"/></div>
      <div className="dish_title">Dish number 3</div>
      <div className="dish_price">$10.00</div>
      <div className="dish_description">description of the dish description of the dishdescription of the dish</div>
      <div className="dish_button"><button className="add">add to cart</button></div>
    </div>
  </div>
</div>
)

export default Specials;