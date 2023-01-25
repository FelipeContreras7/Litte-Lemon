import "./footer.css"

const Footer = () => (
  <div className="footer">
      <div className="footer_nav1">
        <p className="footer_p">NAV TITLE</p>
        <ul className="footer_ul">
          <li className="footer_li"><a href="#">option 1</a></li>
          <li className="footer_li"><a href="#">option 2</a></li>
          <li className="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div className="footer_nav2">
        <p className="footer_p">NAV TITLE</p>
        <ul className="footer_ul">
          <li className="footer_li"><a href="#">option 1</a></li>
          <li className="footer_li"><a href="#">option 2</a></li>
          <li className="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div className="footer_nav3">
        <p className="footer_p">NAV TITLE</p>
        <ul className="footer_ul">
          <li className="footer_li"><a href="#">option 1</a></li>
          <li className="footer_li"><a href="#">option 2</a></li>
          <li className="footer_li"><a href="#">option 3</a></li>
        </ul>
      </div>
      <div className="footer_img">
        <img src={require('../../images/logovertical.png')} alt="footer_photo" className="footer_img1"/>
      </div>
    </div>
)

export default Footer;