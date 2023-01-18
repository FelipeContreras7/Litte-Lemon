import "./footer.css"

const Footer = () => (
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
        <img src={require('../../images/logovertical.png')} alt="footer_photo" class="footer_img1"/>
      </div>
    </div>
)

export default Footer;