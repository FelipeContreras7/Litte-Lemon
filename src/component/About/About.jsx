import "./about.css"

const About = () => (

<div class="about">
        <div class="about_title">Little Lemon</div>
        <div class="about_owners">Owners</div>
        <div class="about_description">description asjhdoaisdh asidjhasiudadso hashdo as d asd asd </div>
      <div class="about_img">
        <div class="container_photo">
          <img src={require('../../images/owner1.png')} alt="hero_photo" class="img1"/>
          <img src={require('../../images/owner2.png')} alt="hero_photo" class="img2"/>
        </div>
      </div>
    </div>
)

export default About;