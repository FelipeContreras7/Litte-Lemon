import "./about.css"

const About = () => (

<div className="about">
        <div className="about_title">Little Lemon</div>
        <div className="about_owners">Owners</div>
        <div className="about_description">description asjhdoaisdh asidjhasiudadso hashdo as d asd asd </div>
      <div className="about_img">
        <div className="container_photo">
          <img src={require('../../images/owner1.png')} alt="hero_photo" className="img1"/>
          <img src={require('../../images/owner2.png')} alt="hero_photo" className="img2"/>
        </div>
      </div>
    </div>
)

export default About;