import "./nav.css"
import Burger from "../Burger/BurgerMenu";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul className="nav_ul">
      <li className="nav_ul_li"><NavLink to="/home">HOME</NavLink></li>
      <li className="nav_ul_li"><NavLink  to="/about">ABOUT</NavLink></li>
      <li className="nav_ul_li"><NavLink  to="/menu">MENU</NavLink></li>
      <li className="nav_ul_li"><NavLink  to="/reservations">RESERVATIONS</NavLink></li>
      <li className="nav_ul_li"><NavLink  to="/order">ORDER ONLINE</NavLink></li>
      <li className="nav_ul_li"><NavLink  to="/login">LOGIN</NavLink></li>
      <Burger/>
    </ul>
  </nav>
)

export default Nav;