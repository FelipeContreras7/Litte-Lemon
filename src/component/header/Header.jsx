import "./header.css";
import Nav from "../Nav/Nav";
const Header = () => (
  <header className="header">
    <div className="img_container"><img src={require('../../imagenes/logoyletras.png')} alt="logo" class="logo-img"/></div>
    <Nav/>
  </header>
)
export default Header;
