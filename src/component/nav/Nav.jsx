import "./nav.css"
import Burger from "../Burger/BurgerMenu";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul className="nav_ul">
      <li className="nav_ul_li"><a href="#">HOME</a></li>
      <li className="nav_ul_li"><a href="#">ABOUT</a></li>
      <li className="nav_ul_li"><a href="#">MENU</a></li>
      <li className="nav_ul_li"><a href="#">RESERVATIONS</a></li>
      <li className="nav_ul_li"><a href="#">ORDER ONLINE</a></li>
      <li className="nav_ul_li"><a href="#">LOGIN</a></li>
      <Burger/>
    </ul>
  </nav>
)

export default Nav;